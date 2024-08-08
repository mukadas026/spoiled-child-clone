<script lang="ts">
    export let imageURL: string
</script>
<button class="w-2/5 lg:w-1/5 flex flex-col gap-y-6">
    <img
        src={imageURL}
        alt=""
        class="scale-100 lg:scale-110"
    />
    <span class="font-bold">
        <slot></slot>
    </span>
</button>