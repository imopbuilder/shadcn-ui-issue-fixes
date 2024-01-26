'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Calendar } from '../ui/calendar';
import { Checkbox } from '../ui/checkbox';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../ui/navigation-menu';
import { Textarea } from '../ui/textarea';

export function PopoverDemo() {
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen} modal={true}>
			<PopoverTrigger asChild>
				<Button className='mb-4'>
					<SearchIcon /> Status
				</Button>
			</PopoverTrigger>
			<PopoverContent className='bg-primary'>
				<div className='flex flex-col gap-5'>
					<div>
						<Checkbox id='pending' className='bg-white' />
						<label htmlFor='pending' className='text-background'>
							Pendente
						</label>
					</div>
					<div>
						<Checkbox id='overdue' className='bg-white' />
						<label htmlFor='overdue' className='text-background'>
							Vencido
						</label>
					</div>
					<div>
						<Checkbox id='paid' className='bg-white' />
						<Label htmlFor='paid' className='text-background'>
							Vencido
						</Label>
					</div>
					<Button variant='secondary' className='mt-2' onClick={() => console.log('click')}>
						Aplicar
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
}

export function DialogDemo() {
	return (
		<Dialog>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent onCloseAutoFocus={() => console.log('closed')}>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

type Checked = DropdownMenuCheckboxItemProps['checked'];

export function SelectRoofs() {
	const [showStatusBar, setShowStatusBar] = useState<Checked>(false);
	const [showPanel, setShowPanel] = useState<Checked>(false);
	const [open, setOpen] = useState(false);

	function handleOpenChange(val: boolean) {
		console.log('Inside', val);
		setOpen(val);
	}

	return (
		<DropdownMenu open={open} onOpenChange={handleOpenChange}>
			<DropdownMenuTrigger asChild>
				<Button variant='outline'>Select roof</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-64 pt-3'>
				<DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar} onSelect={(e) => e.preventDefault()}>
					1
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel} onSelect={(e) => e.preventDefault()}>
					2
				</DropdownMenuCheckboxItem>
				<Button variant='outline' size='sm' className='w-full mt-4'>
					Apply
				</Button>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export function NewPost() {
	const [open, setOpen] = useState(false);

	function handleOpenChange(val: boolean) {
		console.log('Inside', val);
		setOpen(val);
	}

	return (
		<Drawer open={open} onOpenChange={handleOpenChange}>
			<DrawerTrigger asChild>
				<Button variant='outline'>NEW POST</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm'>
					<DrawerHeader>
						<DrawerTitle>
							Title
							<Textarea placeholder='Title' />
						</DrawerTitle>
						<h1>Languages</h1>
						<p>Demo</p>
						<DrawerDescription>
							<Textarea placeholder='Description...' />
						</DrawerDescription>
					</DrawerHeader>
				</div>
			</DrawerContent>
		</Drawer>
	);
}

export function HeaderNav() {
	return (
		<NavigationMenu className='flex items-center justify-between h-12 bg-background'>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink className={'Your custom styles'} asChild>
						<Link href={'/'}>Dashboard</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export function Month() {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<Calendar
			mode='single'
			selected={date}
			onSelect={(e) => {
				console.log(e);
				setDate(e);
			}}
			className='rounded-md border'
		/>
	);
}
