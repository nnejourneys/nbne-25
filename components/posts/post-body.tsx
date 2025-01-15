// "use client"
// import Image from "next/image";
// import { useMDXComponent } from "next-contentlayer/hooks";
// import { H1 } from "../ui/h1";
// import { H2 } from "../ui/h2";
// import { H3 } from "../ui/h3";
// import { H4 } from "../ui/h4";
// import { P } from "../ui/p";
// import PostImage from "./post-image";

// const mdxComponents = {
//   img: PostImage,
//   h1: H1,
//   h2: H2,
//   h3: H3,
//   h4: H4,
//   p: P,
// };

// interface MdxProps {
//   code: string;
// }

// export function PostBody({ code }: MdxProps) {
//   const Component = useMDXComponent(code);

//   return (
//     <div className="max-w-2xl mx-auto">
//       <Component components={mdxComponents} />
//     </div>
//   );
// }

import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { H1 } from "../ui/h1";
import { H2 } from "../ui/h2";
import { H3 } from "../ui/h3";
import { H4 } from "../ui/h4";
import { P } from "../ui/p";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
