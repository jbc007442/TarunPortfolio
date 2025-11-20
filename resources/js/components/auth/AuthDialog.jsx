import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthDialog({ children }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent className="sm:max-w-[450px] space-y-6">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        Welcome
                    </DialogTitle>

                    {/* REQUIRED for accessibility */}
                    <DialogDescription>
                        Login or create a new account to continue.
                    </DialogDescription>
                </DialogHeader>

                {/* Tabs */}
                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                    </TabsList>

                    {/* LOGIN */}
                    <TabsContent value="login" className="space-y-4 mt-6">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="login-email">Email</Label>
                                <Input
                                    id="login-email"
                                    type="email"
                                    placeholder="example@mail.com"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="login-password">Password</Label>
                                <Input
                                    id="login-password"
                                    type="password"
                                    placeholder="******"
                                />
                            </div>
                        </div>

                        <DialogFooter className="flex justify-end gap-2 mt-4">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button>Login</Button>
                        </DialogFooter>
                    </TabsContent>

                    {/* REGISTER */}
                    <TabsContent value="register" className="space-y-4 mt-6">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="reg-name">Name</Label>
                                <Input
                                    id="reg-name"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="reg-email">Email</Label>
                                <Input
                                    id="reg-email"
                                    type="email"
                                    placeholder="example@mail.com"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="reg-password">Password</Label>
                                <Input
                                    id="reg-password"
                                    type="password"
                                    placeholder="******"
                                />
                            </div>
                        </div>

                        <DialogFooter className="flex justify-end gap-2 mt-4">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button>Create Account</Button>
                        </DialogFooter>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
