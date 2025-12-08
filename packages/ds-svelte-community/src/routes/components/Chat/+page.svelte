<script lang="ts">
	import doc from "$lib/components/Chat/Chat.svelte?doc";
	import bubbleDoc from "$lib/components/Chat/ChatBubble.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Chat, ChatBubble, VStack } from "$lib";
</script>

<Doc {doc} extraChildrenDoc={[bubbleDoc]}>
	<Story>
		<VStack gap="10">
			<Chat avatar="EVA" name="EVA" timestamp="01.01.21 14:00">
				<ChatBubble>Hi! My name is Eva.</ChatBubble>
				<ChatBubble>What can I help you with?</ChatBubble>
			</Chat>
			<Chat avatar="ON" name="Ola Normann" timestamp="01.01.21 14:00" position="right">
				<ChatBubble>Hi Eva.</ChatBubble>
				<ChatBubble>Where can I check the status of my parental leave application?</ChatBubble>
			</Chat>
		</VStack>
	</Story>

	<Story name="Position">
		<VStack gap="10">
			<Chat avatar="AB" name="Alice" timestamp="01.01.21 14:00" position="left">
				<ChatBubble>This message is positioned on the left.</ChatBubble>
			</Chat>
			<Chat avatar="CD" name="Bob" timestamp="01.01.21 14:01" position="right">
				<ChatBubble>This message is positioned on the right.</ChatBubble>
			</Chat>
		</VStack>
	</Story>

	<Story name="Variants">
		<VStack gap="10">
			<Chat avatar="N" name="Neutral" timestamp="01.01.21 14:00" variant="neutral">
				<ChatBubble>This is a neutral variant bubble.</ChatBubble>
			</Chat>
			<Chat avatar="S" name="Subtle" timestamp="01.01.21 14:01" variant="subtle">
				<ChatBubble>This is a subtle variant bubble.</ChatBubble>
			</Chat>
			<Chat avatar="I" name="Info" timestamp="01.01.21 14:02" variant="info">
				<ChatBubble>This is an info variant bubble.</ChatBubble>
			</Chat>
		</VStack>
	</Story>

	<Story name="Sizes">
		<VStack gap="10">
			<Chat avatar="M" name="Medium" timestamp="01.01.21 14:00" size="medium">
				<ChatBubble>This is a medium size bubble (default).</ChatBubble>
			</Chat>
			<Chat avatar="S" name="Small" timestamp="01.01.21 14:01" size="small">
				<ChatBubble>This is a small size bubble.</ChatBubble>
			</Chat>
		</VStack>
	</Story>

	<Story name="Without avatar">
		<Chat name="System" timestamp="01.01.21 14:00">
			<ChatBubble>This chat has no avatar.</ChatBubble>
			<ChatBubble>Only the name and timestamp are shown.</ChatBubble>
		</Chat>
	</Story>

	<Story name="Custom toptext position">
		<Chat
			avatar="AB"
			name="Alice"
			timestamp="01.01.21 14:00"
			position="left"
			toptextPosition="right"
		>
			<ChatBubble
				>The avatar is on the left, but the name and timestamp are on the right.</ChatBubble
			>
		</Chat>
	</Story>
</Doc>
