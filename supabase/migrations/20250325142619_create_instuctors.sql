CREATE TABLE instructors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    occupation TEXT,
    bio TEXT,
    url TEXT,
    interest TEXT,
    image TEXT,
    followers UUID[] DEFAULT '{}'
);

CREATE POLICY "Allow only authenticated users"
ON public.instructors
TO authenticated
USING (
    (auth.role() = 'authenticated'::text)
);

-- Enable insert operation for authenticated users only.
CREATE POLICY "Enable insert for authenticated users only"
ON public.instructors
TO authenticated
WITH CHECK (
    true
);

CREATE POLICY "Enable read access for all users"
ON public.instructors
TO public
USING (
    true
);