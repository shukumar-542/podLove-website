// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { useEffect, useRef } from 'react';
// import { useGetUserQuery } from '../../redux/Api/AuthApi';
// import { toast } from 'sonner';
// import { usePodcastDoneMutation } from '../../redux/Api/PodcastApi';
// import { IoArrowBack } from 'react-icons/io5';

// const RoomPage = () => {
//     const { data: getProfile } = useGetUserQuery();
//     // const { roomId } = useParams();
//     const queryParams = new URLSearchParams(window.location.search);

//     // Get the values of the query parameters
//     const roomId = queryParams.get('roomId');
//     const hostId = queryParams.get('hostId');
//     const videoContainerRef = useRef(null);
//     const zpRef = useRef(null);
//     const [podcastDone] = usePodcastDoneMutation();

//     const handleExitPodCast = () => {
//         getProfile?.data?._id === hostId &&
//             podcastDone({ podcastId: roomId })
//     }

//     const myMeeting = async () => {
//         const appID = 369424760;
//         const serverSecret = "57aa479aa7d1a0b236d8f38385df1631";
//         // const devices = await navigator.mediaDevices.enumerateDevices();
//         // const hasCamera = devices.some(device => device.kind === 'videoinput');
//         // const hasMic = devices.some(device => device.kind === 'audioinput');

//         // if (!hasCamera) {
//         //     alert('No camera detected. Video may not work.');
//         // }
//         // if (!hasMic) {
//         //     alert('No microphone detected. Audio may not work.');
//         // }
//         if (!roomId) {
//             return;
//         }

//         try {
//             const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//                 appID,
//                 serverSecret,
//                 roomId,
//                 getProfile?.data?._id,
//                 `${getProfile?.data?.name}`
//             );

//             // Prevent duplicate room joins
//             if (zpRef.current) {
//                 return;
//             }

//             // Create and store the Zego instance
//             zpRef.current = ZegoUIKitPrebuilt.create(kitToken);
//             zpRef.current.joinRoom({
//                 turnOnMicrophoneWhenJoining: true,
//                 turnOnCameraWhenJoining: true,
//                 showMyCameraToggleButton: true,
//                 showMyMicrophoneToggleButton: true,
//                 showAudioVideoSettingsButton: true,
//                 showScreenSharingButton: true,
//                 showTextChat: true,
//                 showUserList: true,
//                 maxUsers: 50,
//                 layout: "Auto",
//                 showLayoutButton: true,
//                 scenario: {
//                     mode: "GroupCall",
//                     config: {
//                         role: "Host",
//                     },
//                 },
//                 onDispose: () => {
//                     handleExitPodCast();
//                     toast.success("Call Ended");
//                     window.location.href = "/home";
//                 },
//             });

//         } catch (error) {
//             alert("Failed to start the meeting. Please check your setup.");
//         }
//     };

//     useEffect(() => {
//         myMeeting();

//         return () => {
//             if (zpRef.current) {
//                 zpRef.current.destroy();
//                 zpRef.current = null;
//             }
//         };
//     }, [roomId]);

//     return <div>
//         <div ref={videoContainerRef} style={{ width: '100%', height: '100vh' }} />
//         <a href={`/home`}>
//             <button
//             className='flex items-center justify-center gap-2'
//                 style={{
//                     position: 'absolute',
//                     top: '20px',
//                     left: '20px',
//                     padding: '5px 10px',
//                     fontSize: '16px',
//                     backgroundColor: '#000000',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '5px',
//                     cursor: 'pointer',
//                     zIndex: 9999,
//                 }}
//             >
//                 <IoArrowBack size={20} />Go Back
//             </button>
//         </a>
//     </div>;
// };

// export default RoomPage;
