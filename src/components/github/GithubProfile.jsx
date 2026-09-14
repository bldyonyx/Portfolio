import { useEffect, useState } from 'react'

function GithubProfile({ username }) {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        )

        if (!response.ok) {
          throw new Error('Could not load GitHub profile')
        }

        const data = await response.json()
        setProfile(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadProfile()
  }, [username])

  return (
    <div className="flex items-center gap-4 border-l border-wine/20 pl-5">
        {/* PROFILE PICTURE */}
        {profile?.avatar_url && (
        <img
            src={profile.avatar_url}
            alt={`${username} GitHub profile`}
            className="
            h-17
            w-17
            shrink-0
            rounded-full
            border
            border-wine/20
            object-cover
            transition-transform
            duration-500
            ease-out
            hover:rotate-[9deg]
            hover:scale-105
            "
        />
        )}
      {/* PROFILE INFO */}
      <div className="min-w-0">
        <p className="font-typewriter text-[9px] uppercase tracking-[0.24em] text-wine/45">
          profile
        </p>

        <p className="mt-2 font-display text-3xl leading-none text-wine">
          {username}
        </p>

        <p className="mt-3 font-typewriter text-[10px] leading-5 text-ink/60">
          learning · building · improving
        </p>
      </div>
    </div>
  )
}

export default GithubProfile