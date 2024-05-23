import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import YouTube from "../components/YouTube";
import Twitter from "../components/Twitter";

const components = {
  Image,
  YouTube,
  Twitter,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
