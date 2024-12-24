<script>
  let {email, handleChange} = $props();

  import {seqid} from "./seqid.js";
  const id = seqid();
  import Error from './Error.svelte'
</script>

<div class="email">
  <label for={id} class="is-required">Email Address</label>
  <input type="email" id={id} name="email" value={email.value} oninput={handleChange}>
  <Error error={email.error} />
</div>