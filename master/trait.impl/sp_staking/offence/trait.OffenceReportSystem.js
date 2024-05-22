(function() {var implementors = {
"pallet_babe":[["impl&lt;T, R, P, L&gt; OffenceReportSystem&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as Config&gt;::AccountId&gt;, (EquivocationProof&lt;&lt;&lt;T as Config&gt;::Block as HeaderProvider&gt;::HeaderT, Public&gt;, &lt;T as <a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_babe/pallet/trait.Config.html#associatedtype.KeyOwnerProof\" title=\"type pallet_babe::pallet::Config::KeyOwnerProof\">KeyOwnerProof</a>)&gt; for <a class=\"struct\" href=\"pallet_babe/struct.EquivocationReportSystem.html\" title=\"struct pallet_babe::EquivocationReportSystem\">EquivocationReportSystem</a>&lt;T, R, P, L&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a> + Config + SendTransactionTypes&lt;<a class=\"enum\" href=\"pallet_babe/pallet/enum.Call.html\" title=\"enum pallet_babe::pallet::Call\">Call</a>&lt;T&gt;&gt;,\n    R: ReportOffence&lt;T::AccountId, P::IdentificationTuple, <a class=\"struct\" href=\"pallet_babe/struct.EquivocationOffence.html\" title=\"struct pallet_babe::EquivocationOffence\">EquivocationOffence</a>&lt;P::IdentificationTuple&gt;&gt;,\n    P: KeyOwnerProofSystem&lt;(<a class=\"struct\" href=\"sp_core/crypto/struct.KeyTypeId.html\" title=\"struct sp_core::crypto::KeyTypeId\">KeyTypeId</a>, <a class=\"type\" href=\"pallet_babe/type.AuthorityId.html\" title=\"type pallet_babe::AuthorityId\">AuthorityId</a>), Proof = T::<a class=\"associatedtype\" href=\"pallet_babe/pallet/trait.Config.html#associatedtype.KeyOwnerProof\" title=\"type pallet_babe::pallet::Config::KeyOwnerProof\">KeyOwnerProof</a>&gt;,\n    P::IdentificationTuple: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    L: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u64.html\">u64</a>&gt;,</div>"]],
"pallet_beefy":[["impl&lt;T, R, P, L&gt; OffenceReportSystem&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as Config&gt;::AccountId&gt;, (DoubleVotingProof&lt;&lt;&lt;&lt;T as Config&gt;::Block as HeaderProvider&gt;::HeaderT as Header&gt;::Number, &lt;T as <a class=\"trait\" href=\"pallet_beefy/pallet/trait.Config.html\" title=\"trait pallet_beefy::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_beefy/pallet/trait.Config.html#associatedtype.BeefyId\" title=\"type pallet_beefy::pallet::Config::BeefyId\">BeefyId</a>, &lt;&lt;T as <a class=\"trait\" href=\"pallet_beefy/pallet/trait.Config.html\" title=\"trait pallet_beefy::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_beefy/pallet/trait.Config.html#associatedtype.BeefyId\" title=\"type pallet_beefy::pallet::Config::BeefyId\">BeefyId</a> as RuntimeAppPublic&gt;::Signature&gt;, &lt;T as <a class=\"trait\" href=\"pallet_beefy/pallet/trait.Config.html\" title=\"trait pallet_beefy::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_beefy/pallet/trait.Config.html#associatedtype.KeyOwnerProof\" title=\"type pallet_beefy::pallet::Config::KeyOwnerProof\">KeyOwnerProof</a>)&gt; for <a class=\"struct\" href=\"pallet_beefy/struct.EquivocationReportSystem.html\" title=\"struct pallet_beefy::EquivocationReportSystem\">EquivocationReportSystem</a>&lt;T, R, P, L&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"pallet_beefy/pallet/trait.Config.html\" title=\"trait pallet_beefy::pallet::Config\">Config</a> + Config + SendTransactionTypes&lt;<a class=\"enum\" href=\"pallet_beefy/pallet/enum.Call.html\" title=\"enum pallet_beefy::pallet::Call\">Call</a>&lt;T&gt;&gt;,\n    R: ReportOffence&lt;T::AccountId, P::IdentificationTuple, <a class=\"struct\" href=\"pallet_beefy/struct.EquivocationOffence.html\" title=\"struct pallet_beefy::EquivocationOffence\">EquivocationOffence</a>&lt;P::IdentificationTuple, BlockNumberFor&lt;T&gt;&gt;&gt;,\n    P: KeyOwnerProofSystem&lt;(<a class=\"struct\" href=\"sp_core/crypto/struct.KeyTypeId.html\" title=\"struct sp_core::crypto::KeyTypeId\">KeyTypeId</a>, T::<a class=\"associatedtype\" href=\"pallet_beefy/pallet/trait.Config.html#associatedtype.BeefyId\" title=\"type pallet_beefy::pallet::Config::BeefyId\">BeefyId</a>), Proof = T::<a class=\"associatedtype\" href=\"pallet_beefy/pallet/trait.Config.html#associatedtype.KeyOwnerProof\" title=\"type pallet_beefy::pallet::Config::KeyOwnerProof\">KeyOwnerProof</a>&gt;,\n    P::IdentificationTuple: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    L: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u64.html\">u64</a>&gt;,</div>"]],
"pallet_grandpa":[["impl&lt;T, R, P, L&gt; OffenceReportSystem&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as Config&gt;::AccountId&gt;, (EquivocationProof&lt;&lt;T as Config&gt;::Hash, &lt;&lt;&lt;T as Config&gt;::Block as HeaderProvider&gt;::HeaderT as Header&gt;::Number&gt;, &lt;T as <a class=\"trait\" href=\"pallet_grandpa/pallet/trait.Config.html\" title=\"trait pallet_grandpa::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_grandpa/pallet/trait.Config.html#associatedtype.KeyOwnerProof\" title=\"type pallet_grandpa::pallet::Config::KeyOwnerProof\">KeyOwnerProof</a>)&gt; for <a class=\"struct\" href=\"pallet_grandpa/struct.EquivocationReportSystem.html\" title=\"struct pallet_grandpa::EquivocationReportSystem\">EquivocationReportSystem</a>&lt;T, R, P, L&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"pallet_grandpa/pallet/trait.Config.html\" title=\"trait pallet_grandpa::pallet::Config\">Config</a> + Config + SendTransactionTypes&lt;<a class=\"enum\" href=\"pallet_grandpa/pallet/enum.Call.html\" title=\"enum pallet_grandpa::pallet::Call\">Call</a>&lt;T&gt;&gt;,\n    R: ReportOffence&lt;T::AccountId, P::IdentificationTuple, <a class=\"struct\" href=\"pallet_grandpa/struct.EquivocationOffence.html\" title=\"struct pallet_grandpa::EquivocationOffence\">EquivocationOffence</a>&lt;P::IdentificationTuple&gt;&gt;,\n    P: KeyOwnerProofSystem&lt;(<a class=\"struct\" href=\"sp_core/crypto/struct.KeyTypeId.html\" title=\"struct sp_core::crypto::KeyTypeId\">KeyTypeId</a>, <a class=\"type\" href=\"pallet_grandpa/type.AuthorityId.html\" title=\"type pallet_grandpa::AuthorityId\">AuthorityId</a>), Proof = T::<a class=\"associatedtype\" href=\"pallet_grandpa/pallet/trait.Config.html#associatedtype.KeyOwnerProof\" title=\"type pallet_grandpa::pallet::Config::KeyOwnerProof\">KeyOwnerProof</a>&gt;,\n    P::IdentificationTuple: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    L: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u64.html\">u64</a>&gt;,</div>"]],
"sp_staking":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()