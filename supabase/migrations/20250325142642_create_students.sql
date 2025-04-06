CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    interest TEXT,
    following_list UUID[] DEFAULT '{}'
);

-- Enable insert operation for authenticated users only.
CREATE POLICY "Enable insert for authenticated users only"
ON public.students
TO authenticated
WITH CHECK (true);

-- Enable update operation for authenticated users only.
CREATE POLICY "Enable update for only authenticated users"
ON public.students
TO authenticated
USING (auth.role() = 'authenticated'::text)
WITH CHECK (auth.role() = 'authenticated'::text);

-- Enable read access for authenticated users only.
CREATE POLICY "Read access for only authenticated users"
ON public.students
TO authenticated
USING (true);
