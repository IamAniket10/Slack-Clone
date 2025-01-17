
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspace";

  
export const CreateWorkspaceModal = () => {
    const [open, setOpen] = useCreateWorkspaceModal();

    const { mutate } = useCreateWorkspace();

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        try {
            const data = await mutate({ 
                name: "Workspace 1" 
            }, {
                onSuccess(data){
                    
                },
            });
        } catch (error) {
            
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a Workspace</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                    <Input
                        value=""
                        disabled={false}
                        required
                        autoFocus
                        minLength={3}
                        placeholder="Workspace Name"
                    />
                    <div className="flex justify-end">
                        <Button disabled={false}>
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>

    );
};
