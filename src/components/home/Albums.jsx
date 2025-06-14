import allAlone from "../../assets/images/albums/All alone.webp"
import bloodlineCode from "../../assets/images/albums/Bloodline code.webp"
import depressed from "../../assets/images/albums/Depressed.webp"
import explode from "../../assets/images/albums/Explode.webp"
import lovers from "../../assets/images/albums/Lovers.webp"
import thugLife from "../../assets/images/albums/Thug life.webp"
import tears from "../../assets/images/albums/Tears.webp"
import unimportant from "../../assets/images/albums/unimportant.webp"
import { useState } from "react"

export default function Albums() {
  const albums = [
    { name: "All alone", artist: "Sera", path: allAlone },
    { name: "Thug Life", artist: "Scholar", path: thugLife },
    { name: "Tears", artist: "Scholar", path: tears },
    { name: "Unimportant", artist: "Young Syntax", path: unimportant },
    { name: "Blue monday", artist: "Young Syntax", path: depressed },
    { name: "Lovers", artist: "Sera", path: lovers },
    { name: "Explode", artist: "Young Syntax", path: explode },
    { name: "Bloodline Code", artist: "Scholar", path: bloodlineCode },
  ];

  return (
    <div className="my-32">
        <h1 className="text-red-400 text-3xl text-center">Albums</h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {albums.map((album, index) => (
            <div
            key={index}
            className="relative w-full aspect-square overflow-hidden rounded-lg group"
            >
            <img
                src={album.path}
                alt={album.name}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-zinc-900 bg-opacity-60 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer flex flex-col items-center justify-center transition duration-500">
                <h3 className="text-white font-inter text-2xl font-bold">{album.name}</h3>
                <hr className="w-full my-1.5 border-t border-t-gray-300"/>
                <p className="text-gray-300 text-sm">{album.artist}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}
