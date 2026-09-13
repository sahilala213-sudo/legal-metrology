"""Stage 2: Detect one hand and draw its 21 MediaPipe landmarks."""

from __future__ import annotations

from typing import Any

import cv2
import mediapipe as mp
import numpy as np


class HandTracker:
    """Small wrapper around MediaPipe's legacy Hands solution API.

    This tutorial-style API is intentionally pinned in requirements.txt because it
    matches the project baseline and keeps the first learning stages approachable.
    """

    def __init__(
        self,
        max_num_hands: int = 1,
        detection_confidence: float = 0.7,
        tracking_confidence: float = 0.7,
    ) -> None:
        self._mp_hands = mp.solutions.hands
        self._drawing = mp.solutions.drawing_utils
        self._hands = self._mp_hands.Hands(
            static_image_mode=False,
            max_num_hands=max_num_hands,
            model_complexity=1,
            min_detection_confidence=detection_confidence,
            min_tracking_confidence=tracking_confidence,
        )

    def detect(self, frame_bgr: np.ndarray) -> list[Any]:
        """Return detected hands after converting OpenCV's BGR frame to RGB."""
        frame_rgb = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2RGB)
        frame_rgb.flags.writeable = False
        results = self._hands.process(frame_rgb)
        return list(results.multi_hand_landmarks or [])

    def draw_landmarks(self, frame_bgr: np.ndarray, hand_landmarks: list[Any]) -> None:
        """Draw each point and the bone-like connections between points."""
        for hand in hand_landmarks:
            self._drawing.draw_landmarks(
                frame_bgr,
                hand,
                self._mp_hands.HAND_CONNECTIONS,
            )

    def close(self) -> None:
        """Release MediaPipe resources when the application exits."""
        self._hands.close()
