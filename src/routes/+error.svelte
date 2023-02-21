<script lang="ts">
    import { page } from '$app/stores';
</script>

<h1 class="text-4xl h-[100vh]">{$page.status}: {$page.error?.message}</h1>