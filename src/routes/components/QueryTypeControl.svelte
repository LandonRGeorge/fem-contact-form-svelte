<script>
  import {seqid} from "./seqid.js";
  const id = seqid();

  let {value, label, handleChange, queryType} = $props();

</script>

<div class="query-type-control {queryType === value ? 'query-type-selected' : ''}">
  <input type="radio" name="query-type" value={value} id={id} oninput={handleChange}>
  <label for={id}>{label}</label>
</div>