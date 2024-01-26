'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Calendar } from '../ui/calendar';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../ui/navigation-menu';
import { Textarea } from '../ui/textarea';

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
