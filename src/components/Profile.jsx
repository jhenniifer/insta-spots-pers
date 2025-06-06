function Profile() {
  return (
    <section
      className="flex flex-col items-center text-center py-5 lg:mx-15"
      aria-label="Hero Left Section"
    >
      <img
        src="/assets/Avatar.png"
        alt="Profile picture of person"
        className="w-40 mx-auto"
      />
      <div className="hero__profile" aria-label="Hero Profile Section">
        <section className="hero__profile--top flex flex-col items-center">
          <h2 className="text-xl font-semibold lg:text-3xl">Bessie Coleman</h2>
          <h3 className="text-[#212121B2] font-semibold">Civil Aviator</h3>
        </section>
        <div className="mt-5">
          <button
            className="flex align-center gap-2"
            aria-label="Edit Profile Button"
          >
            <img src="/assets/Group 2.svg" alt="Edit Profile Icon" />
            Edit Profile
          </button>
          <button>
            <i class="fa-solid fa-plus"></i>
            New Post
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
