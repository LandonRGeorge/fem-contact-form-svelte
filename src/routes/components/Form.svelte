<script>
  import Email from './Email.svelte'
  import QueryType from "./QueryType.svelte";
  import Message from "./Message.svelte";
  import Consent from "./Consent.svelte"
  import Names from "./Names.svelte"

  let formData = $state({
      fname: {value: "", error: ""},
      lname: {value: "", error: ""},
      email: {value: "", error: ""},
      queryType: {value: "", error: ""},
      message: {value: "", error: ""},
      consent: {value: false, error: ""},
    }
  )

  let formSubmitted = $state(false)

  let formHasError = $derived.by(() => {
    return Object.values(formData).filter(j => j.error !== "").length > 0;
  })


  function handleSubmit(e) {
    e.preventDefault()
    formSubmitted = true;

    validateFirstName()
    validateLastName()
    validateEmail()
    validateQueryType()
    validateMessage()
    validateConsent()
  }

  function validateFirstName() {
    formData.fname.error = '';
    if (formData.fname.value.trim() === '') {
      formData.fname.error = 'This field is required'
    }
  }

  function validateLastName() {
    formData.lname.error = '';
    if (formData.lname.value.trim() === '') {
      formData.lname.error = 'This field is required'
    }
  }

  function validateEmail() {
    formData.email.error = '';
    if (formData.email.value.trim() === "") {
      formData.email.error = 'This field is required'
    } else if (!formData.email.value.includes('@')) {
      formData.email.error = 'Please enter a valid email address'
    }
  }

  function validateQueryType() {
    formData.queryType.error = '';
    if (formData.queryType.value === "") {
      formData.queryType.error = "Please select a query type"
    }
  }

  function validateMessage() {
    formData.message.error = '';
    if (formData.message.value.trim() === "") {
      formData.message.error = "This field is required"
    }
  }

  function validateConsent() {
    formData.consent.error = '';
    if (formData.consent.value === false) {
      formData.consent.error = "To submit this form, please consent to being contacted"
    }
  }

  function handleFirstName(e) {
    formData.fname.value = e.target.value
  }

  function handleLastName(e) {
    formData.lname.value = e.target.value
  }

  function handleEmail(e) {
    formData.email.value = e.target.value
  }

  function handleQueryType(e) {
    formData.queryType.value = e.target.value
  }

  function handleMessage(e) {
    formData.message.value = e.target.value
  }

  function handleConsent() {
    formData.consent.value = !formData.consent.value
  }

</script>

{#if !formHasError && formSubmitted}
  <div class="success">
    <h2>Message Sent!</h2>
    <p>Thanks for completing the form. We'll be in touch soon!</p>
  </div>
{/if}
<form onsubmit={handleSubmit}>
  <h1>Contact Us</h1>
  <Names fname={formData.fname} {handleFirstName} lname={formData.lname} {handleLastName}/>
  <Email formSubmitted={formSubmitted} email={formData.email} handleChange={handleEmail}/>
  <QueryType formSubmitted={formSubmitted} queryType={formData.queryType} handleChange={handleQueryType}/>
  <Message formSubmitted={formSubmitted} message={formData.message} handleChange={handleMessage}/>
  <Consent formSubmitted={formSubmitted} consent={formData.consent} handleChange={handleConsent}/>
  <button formnovalidate>Submit</button>
</form>




