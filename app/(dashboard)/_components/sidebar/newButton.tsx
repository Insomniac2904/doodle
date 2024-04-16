"use client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hints } from "@/components/hints";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='aspect-square'>
          <Hints
            label='Create Organisation'
            side='right'
            align='start'
            sideOffset={18}>
            <button className='bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition'>
              <Plus className='text-white' />
            </button>
          </Hints>
        </div>
      </DialogTrigger>
      <DialogContent className='p-0 bg-transparent boarder-none max-w-[480px] border-none'>
        <CreateOrganization></CreateOrganization>
      </DialogContent>
    </Dialog>
  );
};
