import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useGetUserQuery } from '../../redux/Api/AuthApi';

const RoomPage = () => {
    const {data :  getProfile} =  useGetUserQuery();
    const { roomId } = useParams();
    const videoContainerRef = useRef(null);
    const zpRef = useRef(null); 


    const myMeeting = async () => {
        const appID = 1059905830;
        const serverSecret = "291a32510dfc5e6f9a53db9f9b140090";

        if (!roomId) {
            console.error("Invalid Room ID");
            return;
        }

        try {
            // Check if media devices are available before joining
            // const devices = await navigator.mediaDevices.enumerateDevices();
            // const hasCamera = devices.some(device => device.kind === "videoinput");
            // const hasMic = devices.some(device => device.kind === "audioinput");

            // if (!hasCamera) alert("No camera detected. Video may not work.");
            // if (!hasMic) alert("No microphone detected. Audio may not work.");

            // Generate the kit token
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomId,
                Date.now().toString(), 
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
