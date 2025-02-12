

function Card() {
    return (
<div className="card card-side bg-base-100 shadow-xl  text-sm/[12px]" style={{width:"250px",height:"150px",borderRadius:"0"}}>
<figure>
  <img
    src="data:image/png;base64,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"
    alt="Movie" />
</figure>
<div className="card-body">
  <h6 className="card-title text-sm/[14px]">computers</h6>
  <ul class="list-none">
<li>fast</li>
<li>fast</li>
<li>fast</li>
<li>fast</li>
</ul>
</div>

</div>

)
}

export default Card
