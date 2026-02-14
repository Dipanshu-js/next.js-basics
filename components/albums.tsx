async function Albums() {
  const response = await fetch(
    "https://picsum.photos/v2/list?page=1&limit=50",
    {
      cache: "no-store", // always fresh images
    },
  );

  if (!response.ok) throw new Error("Failed to fetch images");

  const photos = await response.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 p-8">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        Gallery 📌
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4">
        {photos.map(
          (photo: { id: string; author: string; download_url: string }) => (
            <div
              key={photo.id}
              className="break-inside-avoid bg-white/10 backdrop-blur-lg 
                         border border-white/20 rounded-2xl overflow-hidden 
                         shadow-lg hover:shadow-2xl hover:scale-[1.03] 
                         transition-all duration-300"
            >
              {/* Image */}
              <img
                src={`https://picsum.photos/id/${photo.id}/500/600`}
                alt={photo.author}
                className="w-full h-auto object-cover"
              />

              {/* Caption */}
              <div className="p-3">
                <p className="text-white text-sm font-semibold">
                  📸 {photo.author}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Albums;
