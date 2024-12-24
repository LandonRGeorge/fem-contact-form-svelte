<script>
  let {name, label, handleChange, klass} = $props()
  import {seqid} from "./seqid.js";
  const id = seqid();
  import Error from './Error.svelte'
</script>

<div class={klass}>
  <label for={id} class="is-required">{label}</label>
  <input type="text" id={id} name="fname" value={name.value} oninput={handleChange}>
  <Error error={name.error} />
</div>