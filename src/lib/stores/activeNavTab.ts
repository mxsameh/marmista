import { writable } from "svelte/store";

const activeTab = 'home';

const ActiveNavTab = writable(activeTab);

export default ActiveNavTab;