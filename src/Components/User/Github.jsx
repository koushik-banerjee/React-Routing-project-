import React, { useEffect, useState } from "react";

const Github = () => {
  const [user, setUser] = useState("koushik-banerjee");
  const [inputUser, setInputUser] = useState("koushik-banerjee");
  const [data, setData] = useState([]);
  const [repo, setRepo] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error: ", error));

    fetch(`https://api.github.com/users/${user}/repos`)
      .then((res) => res.json())
      .then((rep) => setRepo(rep))
      .catch((error) => console.error("Error: ", error));
  }, [user]);

  return (
    <>
      {/* Search Bar */}
      <div>
        <form
          className="p-4 flex items-center justify-center gap-0 bg-gray-600"
          onSubmit={(e) => {
            e.preventDefault();
            setUser(inputUser);
          }}
        >
          <input
            id="inputbox"
            type="text"
            className="rounded-md p-3 bg-slate-500 border border-black"
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
            onFocus={() =>
              (document.getElementById("inputbox").className =
                "rounded-md p-3 bg-white border border-black")
            }
            onBlur={() =>
              (document.getElementById("inputbox").className =
                "rounded-md p-3 bg-slate-500 border border-black")
            }
          />
          <button className="bg-blue-800 p-3 text-white rounded-md">
            Search
          </button>
        </form>
      </div>

      {/* Profile */}
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex items-center justify-evenly">
        <img src={data.avatar_url} alt="git" width={300} />
        <div>
          <div>UserName: {data.name}</div>
          <div>Github Followers: {data.followers}</div>
          <div>Location: {data.location}</div>
        </div>
      </div>

      {/* Repositories */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">Repositories</h2>
        {repo.map((element) => (
          <div key={element.id} className="mb-4 p-2 border rounded">
            <div>
              <strong>Name:</strong> {element.name}
            </div>
            <div>
              <strong>Language:</strong> {element.language || "Not specified"}
            </div>
            <div>
              <strong>Description:</strong> {element.description || "Not mentioned"}
            </div>
            <div className="flex gap-7">
              <a
                href={element.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View on GitHub
              </a>
              <button
                onClick={() => setPreviewUrl(element.homepage)}
                className="text-blue-500 underline"
              >
                Website
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewUrl && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-11/12 h-5/6 bg-white rounded shadow-lg">
            <button
              onClick={() => setPreviewUrl(null)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8"
            >
              ✕
            </button>
            <iframe
              src={previewUrl}
              title="Website Preview"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Github;
