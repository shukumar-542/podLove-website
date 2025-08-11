import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useGetUserQuery } from '../../redux/Api/AuthApi';

const RoomPage = () => {
    const { data: getProfile } = useGetUserQuery();
    console.log('sdfasfsafasdfasdf', getProfile?.data?._id);
    const { roomId } = useParams();
    const videoContainerRef = useRef(null);
    const zpRef = useRef(null);


    const myMeeting = async () => {
        const appID = 369424760;
        const serverSecret = "57aa479aa7d1a0b236d8f38385df1631";
        // const devices = await navigator.mediaDevices.enumerateDevices();
        // console.log(devices);
        // const hasCamera = devices.some(device => device.kind === 'videoinput');
        // const hasMic = devices.some(device => device.kind === 'audioinput');

        // if (!hasCamera) {
        //     alert('No camera detected. Video may not work.');
        // }
        // if (!hasMic) {
        //     alert('No microphone detected. Audio may not work.');
        // }
        if (!roomId) {
            console.error("Invalid Room ID");
            return;
        }

        try {
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomId,
                getProfile?.data?._id,
                `${getProfile?.data?.name}`
            );

            // Prevent duplicate room joins
            if (zpRef.current) {
                console.warn("Already in a room. Skipping duplicate join.");
                return;
            }

            // Create and store the Zego instance
            zpRef.current = ZegoUIKitPrebuilt.create(kitToken);
            zpRef.current.joinRoom({
                container: videoContainerRef.current,
                sharedLinks: [
                    {
                        name: "Video Call Link",
                        url: window.location.href,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                turnOnMicrophoneWhenJoining: true,
                turnOnCameraWhenJoining: true,
                showMyCameraToggleButton: true,
                showMyMicrophoneToggleButton: true,
                showAudioVideoSettingsButton: true,
                showScreenSharingButton: true,
                // turnOnCameraWhenJoining: false,
                // showMyCameraToggleButton: false,
                // showScreenSharingButton: false,
                // showAudioVideoSettingsButton: false, // Optional: hide if only audio matters
                showTextChat: true,
                showUserList: true,
                maxUsers: 2,
                layout: "Auto",
                showLayoutButton: false,
                // scenario: {
                //     mode: ZegoUIKitPrebuilt.OneONoneCall,
                //     // config: {
                //     //     role: "Host",
                //     // },
                // },
            });

        } catch (error) {
            console.error("Error setting up meeting:", error);
            alert("Failed to start the meeting. Please check your setup.");
        }
    };

    useEffect(() => {
        myMeeting();

        return () => {
            if (zpRef.current) {
                zpRef.current.destroy();
                zpRef.current = null;
            }
        };
    }, [roomId]);

    return <div ref={videoContainerRef} style={{ width: '100%', height: '100vh' }}></div>;
};

export default RoomPage;
