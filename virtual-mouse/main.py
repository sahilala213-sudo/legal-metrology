"""Stage 1: Open a webcam preview window with OpenCV."""

from __future__ import annotations

import cv2

from hand_tracker import HandTracker


CAMERA_INDEX = 0
WINDOW_TITLE = "Virtual Mouse - Stage 1: Webcam Preview"


def run_camera_preview() -> None:
    """Show webcam frames and visualise the detected hand landmarks."""
    cap = cv2.VideoCapture(CAMERA_INDEX)

    if not cap.isOpened():
        raise RuntimeError(
            "Could not open the webcam. Check camera permissions and close other apps using it."
        )

    hand_tracker = HandTracker()

    try:
        while True:
            success, frame = cap.read()

            if not success or frame is None:
                print("Could not read a camera frame. Stopping safely.")
                break

            # Mirror the preview so raising your right hand appears on the right.
            frame = cv2.flip(frame, 1)
            hand_landmarks = hand_tracker.detect(frame)
            hand_tracker.draw_landmarks(frame, hand_landmarks)

            status = "HAND DETECTED" if hand_landmarks else "NO HAND"
            cv2.putText(
                frame,
                status,
                (20, 40),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8,
                (0, 255, 0) if hand_landmarks else (0, 0, 255),
                2,
            )
            cv2.imshow(WINDOW_TITLE, frame)

            # waitKey also lets OpenCV refresh its window. ord("q") is the q key.
            if cv2.waitKey(1) & 0xFF == ord("q"):
                break
    finally:
        # Always free the camera and close the window, even after an error.
        hand_tracker.close()
        cap.release()
        cv2.destroyAllWindows()


if __name__ == "__main__":
    run_camera_preview()
