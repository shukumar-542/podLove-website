
import { HMSPrebuilt } from '@100mslive/roomkit-react';

const MS = () => {
    const roomCode = "cgu-ewnc-xyb";  // Replace with your actual room code
    //https://chatgpt.com/share/68b58be5-a028-8000-9ede-7800eb2007c0
    // clue link
    return (
        <div className="h-[100vh] min-h-screen flex flex-col">
            {/* Displaying the 100ms Prebuilt UI if roomCode is provided */}
            {roomCode ? (
                <HMSPrebuilt roomCode={roomCode} />
            ) : (
                <div className="flex justify-center items-center">
                    <p>Please provide a valid room code to join the meeting.</p>
                </div>
            )}
        </div>

    );
};

export default MS;
