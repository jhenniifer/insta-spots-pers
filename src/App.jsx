import React, { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Cards from "./components/Cards";
import { cardDetails as initialCardDetails } from "./components/data";
import Footer from "./components/Footer";
import EditProfileModal from "./components/EditProfileModal";
import CreatePostModal from "./components/CreatePostModal";

function App() {
  // Modal state
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  // Profile state
  const [profile, setProfile] = useState({
    name: "Bessie Coleman",
    bio: "Civil Aviator",
  });

  // Cards state
  const [cards, setCards] = useState(() => {
    const stored = localStorage.getItem("cardDetails");
    return stored ? JSON.parse(stored) : initialCardDetails;
  });

  // Handlers
  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);
  const openCreatePostModal = () => setShowCreatePostModal(true);
  const closeCreatePostModal = () => setShowCreatePostModal(false);

  // Save cards to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem("cardDetails", JSON.stringify(cards));
  }, [cards]);

  const handleProfileSave = () => {
    closeEditModal();
  };

  const handleCreatePost = (post) => {
    // Add new post to cards
    const newCard = {
      name: post.description,
      imgSrc: post.image
        ? URL.createObjectURL(post.image)
        : "/assets/Avatar.png",
      liked: false,
    };
    setCards([newCard, ...cards]);
    closeCreatePostModal();
  };

  return (
    <div className="main-container">
      <Header />
      <Profile
        onEditProfile={openEditModal}
        onNewPost={openCreatePostModal}
        name={profile.name}
        bio={profile.bio}
      />
      <EditProfileModal
        isOpen={showEditModal}
        onClose={closeEditModal}
        onSave={handleProfileSave}
        profile={profile}
        setProfile={setProfile}
      />
      <CreatePostModal
        isOpen={showCreatePostModal}
        onClose={closeCreatePostModal}
        onCreate={handleCreatePost}
      />
      <hr className="hz__line" />
      <Cards cards={cards} setCards={setCards} />
      <hr className="hz__line" />
      <Footer />
    </div>
  );
}

export default App;
