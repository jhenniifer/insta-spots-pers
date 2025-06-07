function Profile() {
  return (
    <section className="hero ">
      <div className="hero__left">
        <img
          src="/assets/Avatar.png"
          alt="Profile picture of person"
          className="hero__img"
        />
        <div className="hero__profile">
          <section className="hero__profile--top">
            <h2 className="hero__name">Bessie Coleman</h2>
            <h3 className="hero__bio">Civil Aviator</h3>
          </section>

          <button className="hero__edit">
            <i className="fa-solid fa-pen"></i>
            Edit Profile
          </button>
        </div>
      </div>
      <button className="new__post">
        <i className="fa-solid fa-plus"></i>
        New Post
      </button>
    </section>
  );
}

export default Profile;
