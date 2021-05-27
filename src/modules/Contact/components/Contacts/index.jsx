import React from "react";

const Contacts = () => {
  return (
    <section class="flex-sect">
      <div class="container-width">
        <div class="flex-title">
          Contacts
          <br />
        </div>
        <div class="flex-desc">
          Call us or message us if you need help or have questions about our service!
          <br />
        </div>
        <div class="cards">
          <div class="card" style={{height: 90 + 'px'}} >
            <div class="card-body">
              <div class="card-title">
                Email
              </div>
              <div>
                beerok@mailaddress
              </div>
            </div>
          </div>
          <div class="card" style={{height: 90 + 'px'}} >
            <div class="card-body">
              <div class="card-title">
                Telegram
              </div>
              <div>
                t.me/beerok
              </div>
            </div>
          </div>
          <div class="card" style={{height: 90 + 'px'}} >
            <div class="card-body">
              <div class="card-title">
                Phone
              </div>
              <div>
                +380380380380
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
