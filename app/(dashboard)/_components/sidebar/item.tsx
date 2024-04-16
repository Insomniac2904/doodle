"use client";

import Image from "next/image";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Hints } from "@/components/hints";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const handleOnClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };

  return (
    <div className='aspect-square relative'>
      <Hints label={name} side='right' sideOffset={18} align='start'>
        <Image
          src={imageUrl}
          onClick={handleOnClick}
          alt={name}
          fill
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hints>
    </div>
  );
};
