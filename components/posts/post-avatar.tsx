import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AuthorProps {
  picture: string;
  name: string;
}

interface AvatarPostProps {
  author: AuthorProps[];
}

export default function AvatarPost({ author }: AvatarPostProps) {
  return (
    <div className="flex items-center">
      {author.map((item, index) => (
        <div key={index}>
          <Avatar>
            <AvatarImage src={item.picture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="font-semibold text-md ml-5 my-3">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
