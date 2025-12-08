<script lang="ts">
	import doc from "$lib/components/GlobalAlert/GlobalAlert.svelte?doc";
	import closeButtonDoc from "$lib/components/GlobalAlert/GlobalAlertCloseButton.svelte?doc";
	import contentDoc from "$lib/components/GlobalAlert/GlobalAlertContent.svelte?doc";
	import headerDoc from "$lib/components/GlobalAlert/GlobalAlertHeader.svelte?doc";
	import titleDoc from "$lib/components/GlobalAlert/GlobalAlertTitle.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import {
		GlobalAlert,
		GlobalAlertCloseButton,
		GlobalAlertContent,
		GlobalAlertHeader,
		GlobalAlertTitle,
	} from "$lib";
</script>

<Doc
	{doc}
	extraChildrenDoc={[headerDoc, titleDoc, contentDoc, closeButtonDoc]}
	preview={{ width: "100%" }}
>
	<Story>
		<GlobalAlert status="announcement">
			<GlobalAlertHeader>
				<GlobalAlertTitle>The system will be unavailable Sunday night</GlobalAlertTitle>
			</GlobalAlertHeader>
			<GlobalAlertContent>
				Announcements are used to communicate something about the app or system, or changes that
				affect users. For example, planned maintenance or operational messages.
			</GlobalAlertContent>
		</GlobalAlert>
	</Story>

	<Story name="Success">
		<GlobalAlert status="success">
			<GlobalAlertHeader>
				<GlobalAlertTitle>You logged in as Ola Normann</GlobalAlertTitle>
			</GlobalAlertHeader>
			<GlobalAlertContent>
				Success is used to inform the user that an action has been completed or something positive
				has happened. For example, that data has been saved or a process is complete.
			</GlobalAlertContent>
		</GlobalAlert>
	</Story>

	<Story name="Warning">
		<GlobalAlert status="warning">
			<GlobalAlertHeader>
				<GlobalAlertTitle>
					This page will be visible to people outside your organization
				</GlobalAlertTitle>
			</GlobalAlertHeader>
			<GlobalAlertContent>
				Warning is used to warn users about something important. For example, that they are missing
				information or that an action may have negative consequences.
			</GlobalAlertContent>
		</GlobalAlert>
	</Story>

	<Story name="Error">
		<GlobalAlert status="error">
			<GlobalAlertHeader>
				<GlobalAlertTitle>Could not connect to backend (Code 362)</GlobalAlertTitle>
			</GlobalAlertHeader>
			<GlobalAlertContent>
				Error is used to inform the user that something critical has happened. For example, that an
				action was not completed or that the system is down.
			</GlobalAlertContent>
		</GlobalAlert>
	</Story>

	<Story name="With close button">
		<GlobalAlert status="announcement">
			<GlobalAlertHeader>
				<GlobalAlertTitle>The system will be unavailable Sunday night</GlobalAlertTitle>
				<GlobalAlertCloseButton onclick={() => alert("Alert closed!")} />
			</GlobalAlertHeader>
			<GlobalAlertContent>
				Use GlobalAlertCloseButton to add a close button to the alert. You must handle the close
				logic yourself.
			</GlobalAlertContent>
		</GlobalAlert>
	</Story>

	<Story name="Small size">
		<GlobalAlert status="announcement" size="small">
			<GlobalAlertHeader>
				<GlobalAlertTitle>Small announcement</GlobalAlertTitle>
			</GlobalAlertHeader>
			<GlobalAlertContent>Use size="small" for a more compact alert.</GlobalAlertContent>
		</GlobalAlert>
	</Story>
</Doc>
