import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface WisetackVideoModalProps {
  triggerLabel?: string;
  title?: string;
}

const WisetackVideoModal = ({
  triggerLabel = "Watch Video",
  title = "Getting Started with Wisetack",
}: WisetackVideoModalProps) => {
  // Use a key tied to open state so the iframe unmounts when the dialog closes,
  // which stops the video playback.
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full text-wisetack-blue border-wisetack-blue/50 hover:border-wisetack-blue hover:bg-wisetack-blue/5"
        >
          {triggerLabel} <Play className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-black">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video bg-gray-900 w-full">
          <iframe
            key={open ? "playing" : "stopped"}
            className="absolute inset-0 w-full h-full"
            src="https://killerplayer.com/watch/video/45aa7290-e0c1-4e51-bc3a-381ee9bc4c77"
            frameBorder="0"
            allow="autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WisetackVideoModal;
