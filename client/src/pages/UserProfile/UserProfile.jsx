// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
// import moment from "moment";
// import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
// import EditProfileForm from "./EditProfileForm";
// import ProfileBio from "./ProfileBio";
// import "./UsersProfile.css";
// import { followUser, unfollowUser } from "../../actions/users";

// const UserProfile = () => {
//   const { id } = useParams();
//   const users = useSelector((state) => state.usersReducer);
//   const currentProfile = users.filter((user) => user._id === id)[0];
//   const currentUser = useSelector((state) => state.currentUserReducer);
//   const [Switch, setSwitch] = useState(false);
//   const dispatch = useDispatch();

//   const followingUser = async (userid) => {
//     dispatch(followUser(userid));
//   };

//   const unfollowingUser = async (userid) => {
//     dispatch(unfollowUser(userid));
//   };

//   return (
//     <div className="home-container-1">
//       <LeftSidebar />
//       <div className="home-container-2">
//         <section>
//           <div className="user-details-container">
//             <div className="user-details">
//               <div className="Avatar">
//                 {currentProfile?.name.charAt(0).toUpperCase()}
//               </div>
//               <div className="user-name">
//                 <h1>{currentProfile?.name}</h1>
//                 <p>
//                   <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
//                   {moment(currentProfile?.createdAt).fromNow()}
//                 </p>
//                 {currentUser?.result._id !== id &&
//                   (currentProfile?.followers.includes(
//                     currentUser?.result._id
//                   ) ? (
//                     <button
//                       className="follow-button"
//                       onClick={() => unfollowingUser(id)}
//                     >
//                       Unfollow
//                     </button>
//                   ) : (
//                     <button
//                       className="follow-button"
//                       onClick={() => followingUser(id)}
//                     >
//                       Follow
//                     </button>
//                   ))}
//               </div>
//             </div>
//             {currentUser?.result._id === id && (
//               <button
//                 type="button"
//                 onClick={() => setSwitch(true)}
//                 className="edit-profile-btn"
//               >
//                 <FontAwesomeIcon icon={faPen} /> Edit Profile
//               </button>
//             )}
//           </div>
//           <div>
//             {Switch ? (
//               <EditProfileForm
//                 currentUser={currentUser}
//                 setSwitch={setSwitch}
//               />
//             ) : (
//               <ProfileBio currentProfile={currentProfile} />
//             )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;



import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UsersProfile.css";
import { followUser, unfollowUser } from "../../actions/users";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.find((user) => user._id === id);
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch current profile data here if needed
  }, []);

  const followUserHandler = (userId) => {
    dispatch(followUser(userId));
  };

  const unfollowUserHandler = (userId) => {
    dispatch(unfollowUser(userId));
  };

  if (!currentProfile) {
    return <div>Loading...</div>; // or any other loading state UI
  }

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <div className="Avatar">
                {currentProfile?.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.createdAt).fromNow()}
                </p>
                {currentUser?.result._id !== id &&
  (currentProfile?.followers && currentProfile.followers.includes(
    currentUser?.result._id
  ) ? (
    <button
      className="follow-button"
      onClick={() => unfollowUserHandler(id)}
    >
      Unfollow
    </button>
  ) : (
    <button
      className="follow-button"
      onClick={() => followUserHandler(id)}
    >
      Follow
    </button>
  ))}

              </div>
            </div>
            {currentUser?.result._id === id && (
              <>
                {isEditing ? (
                  <div className="edit-profile-btn-group">
                    <button
                      type="button"
                      className="cancel-edit-btn"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                    <EditProfileForm
                      currentUser={currentUser}
                      setSwitch={setIsEditing}
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    className="edit-profile-btn"
                    onClick={handleEditProfile}
                  >
                    <FontAwesomeIcon icon={faPen} /> Edit Profile
                  </button>
                )}
              </>
            )}
          </div>
          <div>
            <ProfileBio currentProfile={currentProfile} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
