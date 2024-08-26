import React from "react";

const testData = [
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    artist: "Childish Gambino",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
  {
    id: 1,
    name: "Can You Feel Me?",
    url: "https://www.youtube.com/watch?v=AFqpOjU67Dg",
    artist: "Childish Gambino",
    thumbnail: "http://img.youtube.com/vi/AFqpOjU67Dg/0.jpg",
    updatedAt: "2024-08-26T18:53:08.422Z",
    createdAt: "2024-08-26T18:53:08.422Z",
  },
];

function Videos() {



  return (
    <div className="h-screen w-full bg-black">
      <div className="w-10/12 pt-8 mx-auto">
        <h1 className="text-white text-5xl">YouTube Videos</h1>
        <div className="mt-5 grid grid-cols-5 gap-4 justify-between">
          {testData.map((video) => (
            <div>
                <img className="pt-0" src={video.thumbnail} />
                <h3 className="text-white text-xl mb-0 pb-0">{video.name}</h3>
                <h4 className="text-zinc-300">{video.artist}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;
