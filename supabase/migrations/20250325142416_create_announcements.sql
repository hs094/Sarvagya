CREATE TABLE announcements (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    author_name TEXT NOT NULL,
    interest TEXT,
    author_title TEXT,
    author_id UUID NOT NULL,
    content TEXT NOT NULL,
    likes UUID[] DEFAULT '{}',
    author_image TEXT
);

-- Enable delete operation for users based on their user ID
CREATE POLICY "Enable delete for users based on user_id"
ON public.announcements
FOR DELETE
TO public
USING (
    auth.uid() = author_id
);

-- Enable insert operation for authenticated users only
CREATE POLICY "Enable insert for authenticated users only"
ON public.announcements
FOR INSERT
TO authenticated
WITH CHECK (
    true
);

-- Enable read access for all users
CREATE POLICY "Enable read access for all users"
ON public.announcements
FOR SELECT
TO public
USING (
    true
);

-- Enable update access for authenticated users
CREATE POLICY "Enable update for authenticated users"
ON public.announcements
FOR UPDATE
TO authenticated
USING (
    true
);