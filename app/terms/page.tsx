import React from 'react';
import RootLayout from '@/app/terms/layout'; // Import the RootLayout component

const TermsAndConditionsPage: React.FC = () => {
  // Define the terms and conditions text
  const termsAndConditions = `Terms and Conditions
  Welcome to SamuraiChat (the "Website"). The Website is operated by SamuraiChat ("Company," "we," "us," or "our"). The following terms and conditions (the "Terms") govern your use of the Website and any services, features, content, or applications offered by the Company on or through the Website (the "Services").By accessing or using the Website or the Services, you indicate that you have read, understand, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Website or the Services.Registration and AccountsIn order to access certain features of the Website or the Services, you may be required to register for an account. You must provide accurate, complete, and current information when creating an account, and you must keep your account information up to date at all times.You are responsible for maintaining the confidentiality of your account and password, and you are fully responsible for all activities that occur under your account. You must immediately notify the Company of any unauthorized use of your account or any other security breaches.Prohibited ConductYou agree not to use the Website or the Services for any illegal, fraudulent, or unauthorized purposes. You also agree not to use the Website or the Services in any way that:Infringes the intellectual property rights of any person or entity;Violates the privacy or publicity rights of any person or entity;Is harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libelous, or otherwise offensive or objectionable;Promotes discrimination, bigotry, racism, hatred, harassment, or harm against any individual or group;Is violent or promotes violence;Promotes illegal or harmful activities or substances;Impersonates any person or entity or falsely states or otherwise misrepresents your affiliation with a person or entity;Harvests or collects personal information of users without their consent;Transmits unsolicited or unauthorized advertising or promotional materials, or any other form of spam;Interferes with or disrupts the Website or the Services, or servers or networks connected to the Website or the Services, or disobey any requirements, procedures, policies, or regulations of networks connected to the Website or the Services;Attempts to gain unauthorized access to the Website or the Services, other accounts, computer systems, or networks connected to the Website or the Services, through hacking, password mining, or any other means;Attempts to gain unauthorized access to the Website or the Services, other accounts, computer systems, or networks connected to the Website or the Services, through hacking, password mining, or any other means;Attempts to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization;Attempts to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus to the Website, overloading, "flooding," "spamming," "mailbombing" or "crashing."Content and Intellectual PropertyThe Website and the Services may contain text, images, videos, audio, software, and other content (collectively, the "Content"). The Content is protected by copyright, trademark, and other intellectual property laws.You may not use the Content for any commercial purpose, or for any purpose that is harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar , obscene, libelous, or otherwise offensive or objectionable. You may not modify, reproduce, distribute, or create derivative works from the Content without the express written consent of the Company.The Company grants you a limited, non-exclusive, revocable license to access and use the Website and the Services for personal, non-commercial use, provided that you do not modify the Content and you comply with these Terms.The Company does not claim ownership of any Content that you submit, post, or display on or through the Website or the Services. By submitting, posting, or displaying any Content on or through the Website or the Services, you grant the Company a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute the Content in any and all media or formats, and to sublicense such rights to third parties.TerminationThe Company reserves the right to terminate your access to the Website or the Services at any time and for any reason, without notice. The Company also reserves the right to remove any Content from the Website or the Services at any time and for any reason, without notice.Warranties and DisclaimersThe Website and the Services are provided on an "as is" and "as available" basis. The Company makes no warranties or representations of any kind, express or implied, as to the operation of the Website or the Services, or the information, Content, materials, or products included on the Website or the Services.The Company does not warrant that the Website or the Services will be uninterrupted or error-free, and the Company will not be liable for any interruptions or errors.The Company does not warrant that the Website or the Services will be free from viruses or other harmful components.The Company does not warrant that the Website or the Services will be compatible with your computer or mobile device.The Company does not warrant that the Website or the Services will meet your requirements or expectations.The Company does not warrant that the Content or any information on the Website or the Services is accurate, complete, or current.The Company does not endorse any Content or any opinion, statement, or advice expressed by any third party on or through the Website or the Services.Limitation of LiabilityIn no event shall the Company be liable for any damages whatsoever, including, but not limited to, any direct, indirect, special, incidental, consequential, or punitive damages arising out of or in connection with the use of the Website or the Services, or the inability to use the Website or the Services, or the Content, or any information or materials provided on the Website or the Services, or any action taken in response to, or as a result of, any information or materials available on the Website or the Services, or any unauthorized access to or alteration of your transmissions or data, or any other matter arising out of or in connection with the Website or the Services.IndemnificationYou agree to indemnify and hold the Company, its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Website or the Services, your violation of these Terms, or your violation of any rights of another.Jurisdiction and Governing LawThese Terms and your use of the Website and the Services shall be governed by and construed in accordance with the laws of [insert jurisdiction], without giving effect to any principles of conflicts of law.You agree to submit to the exclusive jurisdiction of the courts of [insert jurisdiction] for the resolution of any dispute or claim arising out of or in connection with these Terms or the Website or the Services.Entire AgreementThese Terms constitute the entire agreement between you and the Company regarding the use of the Website and the Services. Any prior agreements or understandings, whether oral or written, are superseded by these Terms.SeverabilityIf any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.WaiverThe failure of the Company to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.Contact UsIf you have any questions about these Terms or the Website or the Services, please contact us at support@samuraichat.com.`;

  return (
    <RootLayout>
      <div className="relative h-screen overflow-y-auto bg-transparent px-2 py-8 sm:py-16 lg:px-0">
        <div className="absolute inset-0 bg-transparent flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-transparent overflow-hidden shadow-sm sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-white">Terms and Conditions</h3>
                <div className="mt-2 text-sm text-white">
                  <p>{termsAndConditions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

export default TermsAndConditionsPage;