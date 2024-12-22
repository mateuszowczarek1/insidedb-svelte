<script lang="ts">
	import AdminMainSection from "../../components/admin/AdminMainSection.svelte";
	import ListCategories from "../../components/categories/listCategories.svelte";
	import ListRecipes from "../../components/recipes/listRecipes.svelte";
    import { page } from '$app/state';
    let isAdmin = page.data.session?.user.userRole;
</script>

<ListCategories />
<ListRecipes />
<!-- TODO: Conditional rendering -->
 {#if isAdmin === 'LENOR' || isAdmin === 'UBERWEISS'}
<AdminMainSection />
{/if}