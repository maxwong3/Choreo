CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE profiles (
    user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    location TEXT,
    profile_picture_url TEXT,
    instagram_url TEXT,
    youtube_url TEXT,
    tiktok_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    experience_level TEXT,
    dance_styles TEXT[]
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    leader_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    song TEXT NOT NULL,
    artist TEXT NOT NULL,
    description TEXT,
    visibility TEXT DEFAULT 'public',
    member_limit INTEGER NOT NULL,
    start_date DATE,
    end_date DATE,
    leading_style TEXT,
    audition_criteria TEXT,
    looking_for TEXT,
    status TEXT DEFAULT 'recruiting',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE covers (
    id SERIAL PRIMARY KEY,
    creator_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    project_id INTEGER UNIQUE REFERENCES projects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    visibility TEXT DEFAULT 'public',
    video_url TEXT NOT NULL,
    thumbnail_url TEXT,
    published_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    location TEXT,
    thumbnail_url TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE project_members (
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role TEXT NOT NULL,
    joined_at TIMESTAMP DEFAULT NOW(),

    PRIMARY KEY(project_id, user_id)
);

CREATE TABLE group_members (
    group_id INTEGER NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role TEXT NOT NULL, 
    joined_at TIMESTAMP DEFAULT NOW(),

    PRIMARY KEY(group_id, user_id)
);

CREATE TABLE cover_members (
    cover_id INTEGER NOT NULL REFERENCES covers(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role TEXT NOT NULL,
    PRIMARY KEY(cover_id, user_id)
);