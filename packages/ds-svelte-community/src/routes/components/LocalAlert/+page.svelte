<script lang="ts">
	import doc from "$lib/components/alerts/LocalAlert/LocalAlert.svelte?doc";
	import closeButtonDoc from "$lib/components/alerts/LocalAlert/LocalAlertCloseButton.svelte?doc";
	import contentDoc from "$lib/components/alerts/LocalAlert/LocalAlertContent.svelte?doc";
	import headerDoc from "$lib/components/alerts/LocalAlert/LocalAlertHeader.svelte?doc";
	import titleDoc from "$lib/components/alerts/LocalAlert/LocalAlertTitle.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import {
		LocalAlert,
		LocalAlertCloseButton,
		LocalAlertContent,
		LocalAlertHeader,
		LocalAlertTitle,
	} from "$lib";
</script>

<Doc {doc} extraChildrenDoc={[headerDoc, titleDoc, contentDoc, closeButtonDoc]}>
	<Story>
		<LocalAlert status="announcement">
			<LocalAlertHeader>
				<LocalAlertTitle>Could not save changes</LocalAlertTitle>
			</LocalAlertHeader>
			<LocalAlertContent>
				LocalAlert is used to inform users about events affecting parts of the solution. It is
				placed near the event it relates to.
			</LocalAlertContent>
		</LocalAlert>
	</Story>

	<Story name="Announcement">
		<LocalAlert status="announcement">
			<LocalAlertHeader>
				<LocalAlertTitle>New feature available</LocalAlertTitle>
			</LocalAlertHeader>
			<LocalAlertContent>
				Announcements are used to communicate something about the app or changes that affect users.
				For example, new features or important updates.
			</LocalAlertContent>
		</LocalAlert>
	</Story>

	<Story name="Success">
		<LocalAlert status="success">
			<LocalAlertHeader>
				<LocalAlertTitle>Changes saved successfully</LocalAlertTitle>
			</LocalAlertHeader>
			<LocalAlertContent>
				Success is used to inform the user that an action has been completed or something positive
				has happened. For example, that data has been saved or a process is complete.
			</LocalAlertContent>
		</LocalAlert>
	</Story>

	<Story name="Warning">
		<LocalAlert status="warning">
			<LocalAlertHeader>
				<LocalAlertTitle>You have unsaved changes</LocalAlertTitle>
			</LocalAlertHeader>
			<LocalAlertContent>
				Warning is used to warn users about something important. For example, that they are missing
				information or that an action may have negative consequences.
			</LocalAlertContent>
		</LocalAlert>
	</Story>

	<Story name="Error">
		<LocalAlert status="error">
			<LocalAlertHeader>
				<LocalAlertTitle>Could not connect to server</LocalAlertTitle>
			</LocalAlertHeader>
			<LocalAlertContent>
				Error is used to inform the user that something critical has happened. For example, that an
				action was not completed or that there was a connection issue.
			</LocalAlertContent>
		</LocalAlert>
	</Story>

	<Story name="With close button">
		<LocalAlert status="announcement">
			<LocalAlertHeader>
				<LocalAlertTitle>New feature available</LocalAlertTitle>
				<LocalAlertCloseButton onclick={() => alert("Alert closed!")} />
			</LocalAlertHeader>
			<LocalAlertContent>
				Use LocalAlertCloseButton to add a close button to the alert. You must handle the close
				logic yourself.
			</LocalAlertContent>
		</LocalAlert>
	</Story>

	<Story name="Small size">
		<LocalAlert status="announcement" size="small">
			<LocalAlertHeader>
				<LocalAlertTitle>Small announcement</LocalAlertTitle>
			</LocalAlertHeader>
			<LocalAlertContent>Use size="small" for a more compact alert.</LocalAlertContent>
		</LocalAlert>
	</Story>
</Doc>
