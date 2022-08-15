<template>
  <div class="bg-gray-50">
    <div class="py-[30px] md:py-[50px] mx-auto max-w-screen-lg text-center px-[12px] md:px-[30px] lg:px-0">
      <div class="flex items-center justify-center space-x-4 pb-[30px] md:pb-[50px]">
        <div class="text-4xl">FAQ</div>
        <div class="text-4xl">|</div>
        <div>Frequently Asked Question</div>
      </div>
      <div class="flex flex-col md:flex-row md:space-x-[50px] justify-between">
        <div class="w-full">
          <client-only>
            <Accordion>
              <AccordionTab
                header="I do not have QuickBooks, can I still use FaceAzure?"
              >
                <div class="text-left">
                  No, You need to integrate with QuickBooks for the most part.
                  Although there are FaceAzure modules like Payroll that can
                  function independently of QuickBooks, your main lists and
                  journals have to be retrieved from QuickBooks to give you a
                  complete ecosystem experience. Therefore we advise you to get
                  QuickBooks first. Opportunely, we at CAS-BIZ Technology are
                  authorized to implement and support QuickBooks so you do not
                  need to look any further. Contact us to obtain your
                  QuickBooks.
                </div>
              </AccordionTab>
              <AccordionTab
                header="What version of QuickBooks is FaceAzure compatible with?"
              >
                <div class="text-left">
                  FaceAzure Desktop will conveniently integrate with all
                  versions of QuickBooks Desktop ranging from Pro to Premier to
                  Enterprise. Just be sure to have the system requirements.
                </div>
              </AccordionTab>
              <AccordionTab
                header="What are the system requirements for FaceAzure?"
              >
                <div class="text-left">
                  Any decent PC with reasonable capacity and resources will do.
                  But the most ideal environment is as below:
                  <li>Operating System: Windows 8.1 and above</li>
                  <li>Central Processing Unit (CPU): 2 GHz minimum</li>
                  <li>Random Access Memory (RAM): 2 GB minimum</li>
                  <li>Hard Disk Space (HDD): 1 GB minimum</li>
                </div>
              </AccordionTab>
            </Accordion>
          </client-only>
        </div>
        <div class="w-full">
          <client-only>
            <Accordion>
              <AccordionTab
                header="What if my QuickBooks license was not originally sourced?"
              >
                <div class="text-left">
               Anything worth doing is worth doing properly. Fortunately,
                we at CAS-BIZ Technology are certified and authorized by Intuit to license and support QuickBooks in Cambodia.
                 If your QuickBooks license is not original, we can help to switch to genuine QuickBooks and get you started with without losing your data.
                </div>
              </AccordionTab>
              <AccordionTab
                header="How can I get a trial version of FaceAzure?"
              >
                <div class="text-left">
                Our 30-day trial version can be sourced through the FaceAzure support department.
                 Please fill the form to request for the trial version or schedule a demo during which the temporary version shall be implemented and demonstrated to you.
                </div>
              </AccordionTab>
              <AccordionTab
                header="How to contact FaceAzure with multiple company file?"
              >
                <div class="text-left">
                FaceAzure synchronizes only with your currently opened company file on QuickBooks.
                 If you have more than one company file, open the one you desire to retrieve information, before you run the FaceAzure Application.
                </div>
              </AccordionTab>
            </Accordion>
          </client-only>
        </div>
      </div>
      <div class="flex items-center justify-center space-x-4 pt-[30px] md:pt-[50px]">
        <div class="text-center text-sm">
          <a href="/faq">More FAQs...</a>
        </div>
      </div>
    </div>
  </div>
</template>
