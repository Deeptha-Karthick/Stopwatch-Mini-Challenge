// Why Call requestAnimationFrame Again?
// One-Time Invocation:

// requestAnimationFrame is not a looping mechanism on its own. Each call schedules the execution of the callback once, just before the next repaint.
// To achieve continuous updates (e.g., animating or updating a value), you need to schedule the next frame's callback by calling requestAnimationFrame recursively.
// Syncing with the Refresh Rate:

// Each time requestAnimationFrame is invoked, the callback is queued to run before the browser's next repaint, matching the display refresh rate (typically 60 times per second on most screens).
// Re-calling it ensures the updates happen in sync with this cycle, providing smooth animations and reducing unnecessary CPU usage.
// Updating Continuously:

// If you didn’t call requestAnimationFrame again, the updateTime function would only execute once, and no further updates would happen.
// The recursive call allows the function to act like a loop, continuously running for every frame.
// What Happens Without the Recursive Call?
// If you omit timerId.current = requestAnimationFrame(updateTime);, the updateTime function will execute only once. Your timer or animation will stop, as no further frames are scheduled.

// Why Assign to timerId.current?
// Storing the return value of requestAnimationFrame in timerId.current lets you:

// Cancel the Loop: Use cancelAnimationFrame(timerId.current) to stop the updates when the timer is stopped or paused.
// Control the Flow: Prevent multiple overlapping calls to requestAnimationFrame, avoiding performance issues.
// Recap of Execution Flow
// The updateTime function runs because requestAnimationFrame was called.
// Inside updateTime:
// Compute the elapsed time.
// Update the ms state to reflect the accumulated time.
// Call requestAnimationFrame again to schedule the next frame.
// This recursive process continues until you explicitly cancel it with cancelAnimationFrame.
// This ensures smooth, efficient, and synchronized updates to your timer or animation logic!
