<script lang="ts">
	import doc from "$lib/components/typography/BodyLong/BodyLong.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { BodyLong } from "$lib";
</script>

<Doc {doc} preview={{ width: "60%" }}>
	<Story>
		<BodyLong>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nisl aliquam, congue odio
			finibus, convallis tortor. Vestibulum vel rutrum eros, vel accumsan justo. Aliquam maximus
			eleifend nibh eget vulputate. Nunc odio risus, ultricies ac felis et, placerat rutrum dui.
			Vivamus aliquam, dui sit amet ultrices mollis, mauris eros pretium urna, a rhoncus neque quam
			dictum est. Proin non diam nunc. Vivamus quis ipsum tempus, consequat sem at, dignissim metus.
			Ut egestas quis ante nec sollicitudin. Nulla molestie id leo sit amet commodo. Ut venenatis
			est sit amet egestas finibus. Etiam dignissim enim sodales, fermentum ante at, ultricies dui.
			Aliquam eget orci eu arcu eleifend vestibulum sit amet ac est. Nam ornare dapibus neque eget
			ultrices. Cras pharetra sapien sit amet nibh aliquam tempus. Nulla lobortis dignissim neque
			fringilla porttitor.
		</BodyLong>
	</Story>
</Doc>
