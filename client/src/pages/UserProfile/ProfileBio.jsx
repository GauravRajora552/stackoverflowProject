// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const ProfileBio = ({ currentProfile }) => {
//   const [section, setSection] = useState(false);
//   const PostsList = useSelector((state) => state.postReducer);
//   const navigate = useNavigate();

//   const navigateToPostPage = (id) => {
//     navigate(`/stackoverflow-community/post/${id}`);
//   };

//   return (
//     <div className="user-profile-bio-container">
//       <div className="user-profile-bio-sidebar">
//         <span
//           className={section ? "" : "active-span"}
//           onClick={() => setSection(false)}
//         >
//           About
//         </span>
//         <span
//           className={section ? "active-span" : ""}
//           onClick={() => setSection(true)}
//         >
//           Posts
//         </span>
//       </div>
//       {!section ? (
//         <div className="user-bio-section">
//           <div className="user-tags">
//             {currentProfile?.tags.length !== 0 ? (
//               <>
//                 <h4>Tags watched</h4>
//                 {currentProfile?.tags.map((tag) => (
//                   <p key={tag}>{tag}</p>
//                 ))}
//               </>
//             ) : (
//               <span>0 tags watched</span>
//             )}
//           </div>
//           <div className="user-bio">
//             {currentProfile?.about ? (
//               <>
//                 <h4>About</h4>
//                 <p>{currentProfile?.about}</p>
//               </>
//             ) : (
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Aliquam dignissimos veniam nemo exercitationem itaque, dicta
//                 aspernatur facere labore libero possimus fuga omnis cum,
//                 excepturi suscipit quos voluptatum fugit dolorem recusandae!
//               </p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="user-post">
//           {PostsList?.data
//             .filter((item) => item.userId === currentProfile._id)
//             .map((post) => {
//               return (
//                 <div
//                   className="post"
//                   key={post._id}
//                   onClick={() => navigateToPostPage(post._id)}
//                 >
//                   {post.imageUrl ? (
//                     <img src={post.imageUrl} alt="" />
//                   ) : post.videoUrl ? (
//                     <video src={post.videoUrl} alt="" controls />
//                   ) : (
//                     <p className="descb">{post.desc}</p>
//                   )}
//                   {console.log(post.desc)}
//                 </div>
//               );
//             })}
//           {PostsList?.data.filter((item) => item.userId === currentProfile._id)
//             .length === 0 && "0 Post"}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileBio;




import HTMLReactParser from "html-react-parser";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileBio = ({ currentProfile }) => {
  const [section, setSection] = useState(false);
  const PostsList = useSelector((state) => state.postReducer);
  const navigate = useNavigate();

  const navigateToPostPage = (id) => {
    navigate(`/stackoverflow-community/post/${id}`);
  };

  return (
    <div className="user-profile-bio-container">
      <div className="user-profile-bio-sidebar">
        <span
          className={section ? "" : "active-span"}
          onClick={() => setSection(false)}
        >
          About
        </span>
        <span
          className={section ? "active-span" : ""}
          onClick={() => setSection(true)}
        >
          Posts
        </span>
      </div>
      {!section ? (
        <div className="user-bio-section">
          <div className="user-tags">
            {currentProfile?.tags.length !== 0 ? (
              <>
                <h4>Tags watched</h4>
                {currentProfile?.tags.map((tag) => (
                  <p key={tag}>{tag}</p>
                ))}
              </>
            ) : (
              <span>0 tags watched</span>
            )}
          </div>
          <div className="user-bio">
            {currentProfile?.about ? (
              <>
                <h4>About</h4>
                <p>{HTMLReactParser(currentProfile?.about)}</p>
              </>
            ) : (
              
              <p>No bio found</p>
              
            )}
          </div>
        </div>
      ) : (
        <div className="user-post">
          {PostsList?.data
            .filter((item) => item.userId === currentProfile._id)
            .map((post) => {
              return (
                <div
                  className="post"
                  key={post._id}
                  onClick={() => navigateToPostPage(post._id)}
                >
                  {post.imageUrl ? (
                    <img src={post.imageUrl} alt="" />
                  ) : post.videoUrl ? (
                    <video src={post.videoUrl} alt="" controls />
                  ) : (
                    <p className="desc">{post.desc}</p>
                  )}
                </div>
              );
            })}
          {PostsList?.data.filter((item) => item.userId === currentProfile._id)
            .length === 0 && "0 Post"}
        </div>
      )}
    </div>
  );
};

export default ProfileBio;