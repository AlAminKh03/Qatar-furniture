type ReviewProps = {
  name: string;
  text: string;
};

function LetterAvatar({ name }: { name: string }) {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className="w-12 h-12 rounded-full bg-zinc-800 text-white flex items-center justify-center text-lg font-semibold">
      {firstLetter}
    </div>
  );
}

export function Review({ name, text }: ReviewProps) {
  return (
    <div className="flex gap-4 p-4">
      <div>
        <LetterAvatar name={name} />
      </div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="mt-2 text-gray-600">{text}</p>
      </div>
    </div>
  );
}
