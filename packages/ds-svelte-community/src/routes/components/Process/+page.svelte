<script lang="ts">
	import doc from "$lib/components/Process/Process.svelte?doc";
	import eventDoc from "$lib/components/Process/ProcessEvent.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Process, ProcessEvent } from "$lib";
	import {
		BabyWrappedIcon,
		CheckmarkHeavyIcon,
		ChildHairEyesIcon,
		FileIcon,
		TasklistSendIcon,
		ThumbUpIcon,
	} from "$lib/icons";
</script>

<Doc {doc} extraChildrenDoc={[eventDoc]} preview={{ width: "600px" }}>
	<Story>
		<Process>
			<ProcessEvent status="completed" title="The baby was born" timestamp="August 04, 2025">
				{#snippet bullet()}
					<BabyWrappedIcon />
				{/snippet}
			</ProcessEvent>
			<ProcessEvent
				status="completed"
				title="You applied for PARENTAL BENEFITS"
				timestamp="August 22, 2025"
			>
				{#snippet bullet()}
					<TasklistSendIcon />
				{/snippet}
				<a href="#application">
					<FileIcon aria-hidden fontSize="24" />
					Application for parental benefits at birth
				</a>
			</ProcessEvent>
			<ProcessEvent
				status="completed"
				title="Your application was approved"
				timestamp="August 25, 2025"
			>
				{#snippet bullet()}
					<ThumbUpIcon />
				{/snippet}
				<a href="#approval">
					<FileIcon aria-hidden fontSize="24" />
					Approval letter for Parental Benefits
				</a>
			</ProcessEvent>
			<ProcessEvent
				status="completed"
				title="You have received a response to your application"
				timestamp="September 08, 2025"
			>
				<a href="#response">
					<FileIcon aria-hidden fontSize="24" />
					Termination of Parental Benefits
				</a>
			</ProcessEvent>
			<ProcessEvent
				status="active"
				title="Nav has requested information"
				timestamp="September 08, 2025"
			/>
			<ProcessEvent title="The baby turns 3 years old" timestamp="August 22, 2028">
				{#snippet bullet()}
					<ChildHairEyesIcon />
				{/snippet}
				You must use the parental benefits before the baby turns 3 years old. If you are expecting a
				new baby, you must use the parental benefits before the new parental benefit period starts.
			</ProcessEvent>
		</Process>
	</Story>

	<Story name="Simple events">
		<Process>
			<ProcessEvent status="completed" title="Application started" timestamp="August 04, 2025" />
			<ProcessEvent status="completed" title="Documents submitted" timestamp="August 22, 2025">
				Your application has been received and is being processed
			</ProcessEvent>
			<ProcessEvent status="active" title="Under review" timestamp="August 25, 2025">
				We are currently reviewing your application
			</ProcessEvent>
			<ProcessEvent title="Decision" timestamp="September 08, 2025">
				A final decision will be made on your application
			</ProcessEvent>
		</Process>
	</Story>

	<Story name="Numbers">
		<p>
			You can use bullet to show a number in each event. This can be useful to show the order of
			steps in an already known process.
		</p>
		<Process>
			<ProcessEvent status="completed" title="Register account" timestamp="Day 1">
				{#snippet bullet()}
					1
				{/snippet}
				Create your user account
			</ProcessEvent>
			<ProcessEvent status="completed" title="Verify email" timestamp="Day 1">
				{#snippet bullet()}
					2
				{/snippet}
				Check your email and click the verification link
			</ProcessEvent>
			<ProcessEvent status="active" title="Complete profile" timestamp="Day 2">
				{#snippet bullet()}
					3
				{/snippet}
				Fill in your personal information
			</ProcessEvent>
			<ProcessEvent title="Start using" timestamp="Day 3">
				{#snippet bullet()}
					4
				{/snippet}
				You're ready to use the service
			</ProcessEvent>
		</Process>
	</Story>

	<Story name="Checkmarks">
		<p>
			If you want to have a checkmark on completed steps, you can use <code
				>&lt;CheckmarkHeavyIcon /&gt;</code
			>.
		</p>
		<Process>
			<ProcessEvent status="completed" title="Application submitted" timestamp="August 04, 2025">
				{#snippet bullet()}
					<CheckmarkHeavyIcon />
				{/snippet}
				Your application has been received
			</ProcessEvent>
			<ProcessEvent status="completed" title="Documents verified" timestamp="August 10, 2025">
				{#snippet bullet()}
					<CheckmarkHeavyIcon />
				{/snippet}
				All required documents have been verified
			</ProcessEvent>
			<ProcessEvent status="completed" title="Approved" timestamp="August 15, 2025">
				{#snippet bullet()}
					<CheckmarkHeavyIcon />
				{/snippet}
				Your application has been approved
			</ProcessEvent>
			<ProcessEvent status="active" title="Payment processing" timestamp="August 20, 2025">
				Payment is being processed
			</ProcessEvent>
			<ProcessEvent title="Completed" timestamp="August 25, 2025">
				Process completed successfully
			</ProcessEvent>
		</Process>
	</Story>

	<Story name="Hide status text">
		<p>
			You can hide the "Active" label on active events using the <code>hideStatusText</code> prop.
		</p>
		<Process hideStatusText>
			<ProcessEvent status="completed" title="Step 1 completed" timestamp="August 21, 2025" />
			<ProcessEvent status="active" title="Step 2 in progress" timestamp="August 22, 2025">
				Currently working on this step
			</ProcessEvent>
			<ProcessEvent title="Step 3 pending" timestamp="August 25, 2025">
				Waiting to start
			</ProcessEvent>
		</Process>
	</Story>

	<Story name="Truncated">
		<p>
			Use <code>isTruncated</code> to add a connector line before the first and/or after the last event.
			This illustrates that the process has more events before/after than what is shown.
		</p>
		<Process isTruncated="both">
			<ProcessEvent title="January 2, 2020 at 10:21">
				Your payment plan has been updated, read the decision for more information
			</ProcessEvent>
			<ProcessEvent title="December 27, 2019 at 14:48">
				Living expenses, Rent has been processed
			</ProcessEvent>
			<ProcessEvent title="December 21, 2019 at 16:52">
				You have sent 10 attachments to NAV
			</ProcessEvent>
		</Process>
	</Story>
</Doc>
