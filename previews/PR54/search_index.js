var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [PartiallySeparableNLPModels, ModAbstractPSNLPModels, Utils, ModPBFGSNLPModels, ModPCSNLPModels, ModPLBFGSNLPModels, ModPLSENLPModels, ModPLSR1NLPModels, ModPSENLPModels, ModPSNLPModels, ModPSR1NLPModels]","category":"page"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.SupportedNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.SupportedNLPModel","text":"Accumulate the supported NLPModels. \n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.ElementFunction","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.ElementFunction","text":"ElementFunction\n\nA type that gathers the information indentifying an element function in a PartiallySeparableNLPModel, and its properties. ElementFunction has fields:\n\ni: the index of the element function;\nindex_element_tree: the index occupied in the element-function vector after the deletion of redundant element functions;\nvariable_indices: list of elemental variables of ElementFunction;\ntype: constant, linear, quadratic, cubic or general;\nconvexity_status: constant, linear, convex, concave or unknown.\n\n\n\n\n\n","category":"type"},{"location":"reference/#NLPModels.grad!-Union{Tuple{P}, Tuple{S}, Tuple{T}, Tuple{P, AbstractVector{T}, AbstractVector{T}}} where {T, S, P<:PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel{T, S}}","page":"Reference","title":"NLPModels.grad!","text":"g = grad!(nlp, x, g)\n\nEvaluate ∇f(x), the gradient of the objective function at x in place.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.hprod!-Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPQNNLPModel, AbstractVector, AbstractVector, AbstractVector}","page":"Reference","title":"NLPModels.hprod!","text":"hprod!(nlp::AbstractPQNNLPModel, x::AbstractVector, v::AbstractVector, Hv::AbstractVector; obj_weight=1.)\n\nEvaluate the product of the objective Hessian at x with the vector v, with objective function scaled by obj_weight.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.hprod!-Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel, AbstractVector, AbstractVector, AbstractVector}","page":"Reference","title":"NLPModels.hprod!","text":"hprod!(nlp::PartiallySeparableNLPModel, x::AbstractVector, v::AbstractVector, Hv::AbstractVector; obj_weight=1.)\n\nEvaluate the product of the objective Hessian at x with the vector v, with objective function scaled by obj_weight.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.obj-Union{Tuple{P}, Tuple{S}, Tuple{T}, Tuple{P, AbstractVector{T}}} where {T, S, P<:PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel{T, S}}","page":"Reference","title":"NLPModels.obj","text":"f = obj(nlp, x)\n\nEvaluate f(x), the objective function of nlp at x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.evaluate_grad_part_data!-Union{Tuple{Y}, Tuple{AbstractVector{Y}, PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.evaluate_grad_part_data!","text":"evaluate_grad_part_data!(g::AbstractVector{Y}, psnlp::AbstractPartiallySeparableNLPModel, x::AbstractVector{Y}) where {Y <: Number}\nevaluate_grad_part_data!(psnlp::AbstractPartiallySeparableNLPModel)\n\nEvaluate the gradient at x in place. It computes and store the element gradients in psnlp.pg and accumulate their contributions in g. When g and x are omitted, consider that psnlp.g and psnlp.x are g and x, respectively.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.evaluate_grad_part_data-Union{Tuple{Y}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.evaluate_grad_part_data","text":"gradient = evaluate_grad_part_data(psnlp::AbstractPartiallySeparableNLPModel, x::AbstractVector{Y}) where {Y <: Number}\n\nReturn the gradient vector g at x. After the computation of the element gradients (stored in psnlp.pg), g is built by accumulating their contributions.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.evaluate_obj_part_data!-Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel}","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.evaluate_obj_part_data!","text":"evaluate_obj_part_data!(psnlp::AbstractPartiallySeparableNLPModel)\n\nCompute the partially separable objective function, as a sum of element functions, at psnlp.x. Its objective value is stored in psnlp.fx .\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.evaluate_obj_part_data-Union{Tuple{Y}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.evaluate_obj_part_data","text":"fx = evaluate_obj_part_data(psnlp::AbstractPartiallySeparableNLPModel, x::AbstractVector{Y}) where {Y <: Number}\n\nReturn the partially separable objective at x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.evaluate_y_part_data!-Union{Tuple{Y}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel, AbstractVector{Y}, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.evaluate_y_part_data!","text":"evaluate_y_part_data!(psnlp::AbstractPartiallySeparableNLPModel, x::AbstractVector{Y}, s::AbstractVector{Y}) where {Y <: Number}\nevaluate_y_part_data!(psnlp::AbstractPartiallySeparableNLPModel, s::AbstractVector{Y}) where {Y <: Number}\n\nCompute element gradients differences ∇̂fᵢ(x+s)-∇̂fᵢ(x) for each element function.  Store the results in psnlp.py. When x is ommited, consider psnlp.x as x and psnlp.pg as the partitioned gradient at x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.hess_approx-Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPQNNLPModel}","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.hess_approx","text":"B = hess_approx(nlp::AbstractPQNNLPModel)\n\nReturn the Hessian approximation of nlp.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.partitionedMulOp!-Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPQNNLPModel, Any, Any, Any, Any}","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.partitionedMulOp!","text":"partitionedMulOp!(pqn_nlp::AbstractPQNNLPModel, res, v, α, β)\n\nPartitioned 5-arg mul! for pqn_nlp using the partitioned matrix and partitioned vectors to destribute and collect the result of element matrix-vector products.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.product_part_data_x!-Union{Tuple{Y}, Tuple{AbstractVector{Y}, PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.product_part_data_x!","text":"product_part_data_x!(res::AbstractVector{Y}, psnlp::AbstractPartiallySeparableNLPModel, v::AbstractVector{Y}) where {Y <: Number}\nproduct_part_data_x!(epv_res::PartitionedStructures.Elemental_pv{Y}, psnlp::AbstractPartiallySeparableNLPModel, epv::PartitionedStructures.Elemental_pv{Y}) where {Y <: Number}\nproduct_part_data_x!(epv_res::PartitionedStructures.Elemental_pv{Y}, pB::T, epv::PartitionedStructures.Elemental_pv{Y}) where {Y <: Number, T <: PartitionedStructures.Part_mat{Y}}\n\nStore the product between the partitioned matrix psnlp.pB and the vector v in res. The computation of every element matrix-vector product require two partitioned vectors. The first partitioned vector epv is created from v and the results are stored in the second partitioned vector epv_res which builds the value store by g.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.product_part_data_x-Union{Tuple{Y}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPartiallySeparableNLPModel, AbstractVector{Y}}} where Y<:Number","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.product_part_data_x","text":"Bx = product_part_data_x(psnlp::AbstractPartiallySeparableNLPModel, v::AbstractVector{Y}) where {Y <: Number}\n\nReturn the product between the partitioned matrix psnlp.pB and v.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.update_nlp!-Union{Tuple{S}, Tuple{T}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPQNNLPModel{T, S}, Vector{T}, Vector{T}}} where {T<:Number, S}","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.update_nlp!","text":"update_nlp!(pqn_nlp::AbstractPQNNLPModel{T,S}, s::Vector{T})\nupdate_nlp!(pqn_nlp::AbstractPQNNLPModel{T,S}, x::Vector{T}, s::Vector{T})\n\nPerform the partitioned quasi-Newton update given the current point x and the step s. When x is omitted, update_PQN! consider that pqn_nlp has the current point in pqnnlp.x. Moreover, it assumes that the partitioned gradient atxis already computed inpqnnlp.pg. Will be replace bypush!whenPartitionedVector` are implemented.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModAbstractPSNLPModels.update_nlp-Union{Tuple{S}, Tuple{T}, Tuple{PartiallySeparableNLPModels.ModAbstractPSNLPModels.AbstractPQNNLPModel{T, S}, Vector{T}, Vector{T}}} where {T<:Number, S}","page":"Reference","title":"PartiallySeparableNLPModels.ModAbstractPSNLPModels.update_nlp","text":"update_nlp(pqn_nlp::AbstractPQNNLPModel{T,S}, x::Vector{T}, s::Vector{T})\n\nPerform the partitioned quasi-Newton update given the current point x and the step s. When x is omitted, update_PQN! consider that pqn_nlp has the current point in pqnnlp.x. Moreover, it assumes that the partitioned gradient atxis already computed inpqnnlp.pg. Will be replace bypush!whenPartitionedVector` are implemented.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Utils.compiled_grad_element_function-Tuple{T} where T","page":"Reference","title":"PartiallySeparableNLPModels.Utils.compiled_grad_element_function","text":"element_gradient_tape = compiled_grad_element_function(element_function::T; ni::Int = length(ExpressionTreeForge.get_elemental_variables(element_function)), type = Float64) where {T}\n\nReturn the elment_gradient_tape::GradientTape which speed up the gradient computation of element_function with ReverseDiff.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Utils.distinct_element_expr_tree-Union{Tuple{T}, Tuple{Vector{T}, Vector{Vector{Int64}}}} where T","page":"Reference","title":"PartiallySeparableNLPModels.Utils.distinct_element_expr_tree","text":"(element_expr_trees, indices_element_tree) = distinct_element_expr_tree(vec_element_expr_tree::Vector{T}, vec_element_variables::Vector{Vector{Int}}; N::Int = length(vec_element_expr_tree)) where {T}\n\nIn practice, there may have several element functions having the same expression tree. distinct_element_expr_tree filters the vector vec_element_expr_tree to return element_expr_trees the distincts element functions. length(element_expr_trees) == M < N == length(vec_element_expr_tree). In addition it returns indices_element_tree, who records the index (1 <= i <= M) related ot the expression tree of each element function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.Utils.partially_separable_structure-Union{Tuple{T}, Tuple{G}, Tuple{G, Int64}} where {G, T<:Number}","page":"Reference","title":"PartiallySeparableNLPModels.Utils.partially_separable_structure","text":"partitioneddata_tr_pqn = build_PartitionedDataTRPQN(expr_tree, n)\n\nReturn the structure required to run a partitioned quasi-Newton trust-region method.  It finds the partially-separable structure of an expression tree expr_tree representing f(x) = ∑fᵢ(xᵢ). Then it allocates the partitioned structures required. To define properly the sparse matrix of the partitioned matrix we need the size of the problem: n.\n\n\n\n\n\n","category":"method"},{"location":"reference/#PartiallySeparableNLPModels.ModPBFGSNLPModels.PBFGSNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPBFGSNLPModels.PBFGSNLPModel","text":"PBFGSNLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned BFGS Hessian approximation. PBFGSNLPModel has fields:\n\nnlp: the original model;\nmeta: gather information about the PartiallySeparableNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nx: the current point;\nv: a temporary vector;\ns: the current step;\npg: the partitioned gradient;\npv: a temporary partitioned vector;\npy: the partitioned gradient difference;\nps: the partitioned step;\nphv: the partitioned Hessian-vector product;\npB: the partitioned matrix (main memory cost);\nfx: the current value of the objective function;\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPCSNLPModels.PCSNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPCSNLPModels.PCSNLPModel","text":"PCSNLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned BFGS Hessian approximation. PCSNLPModel has fields:\n\nnlp: the original model;\nmeta: gather information about the PartiallySeparableNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nx: the current point;\nv: a temporary vector;\ns: the current step;\npg: the partitioned gradient;\npv: a temporary partitioned vector;\npy: the partitioned gradient difference;\nps: the partitioned step;\nphv: the partitioned Hessian-vector product;\npB: the partitioned matrix (main memory cost);\nfx: the current value of the objective function;\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPLBFGSNLPModels.PLBFGSNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPLBFGSNLPModels.PLBFGSNLPModel","text":"PLBFGSNLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned BFGS Hessian approximation. PLBFGSNLPModel has fields:\n\nnlp: the original model;\nmeta: gather information about the PartiallySeparableNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nx: the current point;\nv: a temporary vector;\ns: the current step;\npg: the partitioned gradient;\npv: a temporary partitioned vector;\npy: the partitioned gradient difference;\nps: the partitioned step;\nphv: the partitioned Hessian-vector product;\npB: the partitioned matrix (main memory cost);\nfx: the current value of the objective function;\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPLSENLPModels.PLSENLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPLSENLPModels.PLSENLPModel","text":"PLSENLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned BFGS Hessian approximation. PLSENLPModel has fields:\n\nnlp: the original model;\nmeta: gather information about the PartiallySeparableNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nx: the current point;\nv: a temporary vector;\ns: the current step;\npg: the partitioned gradient;\npv: a temporary partitioned vector;\npy: the partitioned gradient difference;\nps: the partitioned step;\nphv: the partitioned Hessian-vector product;\npB: the partitioned matrix (main memory cost);\nfx: the current value of the objective function;\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPLSR1NLPModels.PLSR1NLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPLSR1NLPModels.PLSR1NLPModel","text":"PLSR1NLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned BFGS Hessian approximation. PLSR1NLPModel has fields:\n\nnlp: the original model;\nmeta: gather information about the PartiallySeparableNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nx: the current point;\nv: a temporary vector;\ns: the current step;\npg: the partitioned gradient;\npv: a temporary partitioned vector;\npy: the partitioned gradient difference;\nps: the partitioned step;\nphv: the partitioned Hessian-vector product;\npB: the partitioned matrix (main memory cost);\nfx: the current value of the objective function;\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPSENLPModels.PSENLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPSENLPModels.PSENLPModel","text":"PSENLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned BFGS Hessian approximation. PSENLPModel has fields:\n\nnlp: the original model;\nmeta: gather information about the PartiallySeparableNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nx: the current point;\nv: a temporary vector;\ns: the current step;\npg: the partitioned gradient;\npv: a temporary partitioned vector;\npy: the partitioned gradient difference;\nps: the partitioned step;\nphv: the partitioned Hessian-vector product;\npB: the partitioned matrix (main memory cost);\nfx: the current value of the objective function;\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPSNLPModels.PSNLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPSNLPModels.PSNLPModel","text":"PSNLPModel{G, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned BFGS Hessian approximation. PSNLPModel has fields:\n\nnlp: the original model;\nmeta: gather information about the PartiallySeparableNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nx: the current point;\nv: a temporary vector;\ns: the current step;\npg: the partitioned gradient;\npv: a temporary partitioned vector;\npy: the partitioned gradient difference;\nps: the partitioned step;\nphv: the partitioned Hessian-vector product;\nfx: the current value of the objective function;\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"reference/#PartiallySeparableNLPModels.ModPSR1NLPModels.PSR1NLPModel","page":"Reference","title":"PartiallySeparableNLPModels.ModPSR1NLPModels.PSR1NLPModel","text":"PSR1NLPModel{G, P, T, S, M <: AbstractNLPModel{T, S}, Meta <: AbstractNLPModelMeta{T, S},} <: AbstractPQNNLPModel{T,S}\n\nDeduct and allocate the partitioned structures of a NLPModel using partitioned BFGS Hessian approximation. PSR1NLPModel has fields:\n\nnlp: the original model;\nmeta: gather information about the PartiallySeparableNLPModel;\ncounters: count how many standards methods of NLPModels are called;\nn: the size of the problem;\nN: the number of element functions;\nvec_elt_fun: a ElementFunction vector, of size N;\nM: the number of distinct element-function expression trees;\nvec_elt_complete_expr_tree: a Complete_expr_tree vector, of size M;\nelement_expr_tree_table: a vector of size M, the i-th element element_expr_tree_table[i]::Vector{Int} informs which element functions use the vec_elt_complete_expr_tree[i] expression tree;\nindex_element_tree: a vector of size N where each component indicates which Complete_expr_tree from vec_elt_complete_expr_tree is used for the corresponding element;\nvec_compiled_element_gradients: the vector gathering the compiled tapes for every element gradient evaluations;\nx: the current point;\nv: a temporary vector;\ns: the current step;\npg: the partitioned gradient;\npv: a temporary partitioned vector;\npy: the partitioned gradient difference;\nps: the partitioned step;\nphv: the partitioned Hessian-vector product;\npB: the partitioned matrix (main memory cost);\nfx: the current value of the objective function;\nname: the name of partitioned quasi-Newton update performed\n\n\n\n\n\n","category":"type"},{"location":"#PartiallySeparableNLPModels.jl","page":"Home","title":"PartiallySeparableNLPModels.jl","text":"","category":"section"},{"location":"#Philosophy","page":"Home","title":"Philosophy","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The purpose of PartiallySeparableNLPModels.jl is to define automatically partially-separable NLPModels and facilitate the implementation of partitioned quasi-Newton methods.","category":"page"},{"location":"#Compatibility","page":"Home","title":"Compatibility","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Julia ≥ 1.6.","category":"page"},{"location":"#How-to-install","page":"Home","title":"How to install","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"pkg> add https://github.com/JuliaSmoothOptimizers/ExpressionTreeForge.jl, https://github.com/JuliaSmoothOptimizers/PartiallySeparableNLPModels.jl\npkg> test PartiallySeparableNLPModels","category":"page"},{"location":"#How-to-use","page":"Home","title":"How to use","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"See the tutorial.","category":"page"},{"location":"#Dependencies","page":"Home","title":"Dependencies","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The module uses ExpressionTreeForge.jl to detect the partially-separable structure and PartitionedStructures.jl to allocate partitioned quasi-Newton approximations.","category":"page"},{"location":"#Application","page":"Home","title":"Application","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"PartiallySeparableSolvers.jl implements partitioned quasi-Newton trust-region methods from PartitionedDataTRPQN and the PartiallySeparableNLPModels.jl methods.","category":"page"},{"location":"tutorial/#PartiallySeparableNLPModels.jl-Tutorial","page":"Tutorial","title":"PartiallySeparableNLPModels.jl Tutorial","text":"","category":"section"},{"location":"tutorial/#An-NLPModel-exploiting-partial-separability","page":"Tutorial","title":"An NLPModel exploiting partial separability","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"PartiallySeparableNLPModels.jl defines a subtype of AbstractNLPModel to exploit automatically the partially-separable structure of fR^n to R","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":" f(x) = sum_i=1^N f_i (U_i x)   f_i  R^n_i to R  U_i in R^n_i times n n_i ll n","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"as the sum of element functions f_i.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"PartiallySeparableNLPModels.jl relies on ExpressionTreeForge.jl to detect the partially-separable structure and defines the suitable partitioned structures, required by the partitioned derivatives, using PartitionedStructures.jl.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"As a user, you need only define an NLPModel with an objective function implemented in pure Julia. For instance, one may use an ADNLPModel:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using PartiallySeparableNLPModels, ADNLPModels\n\nfunction example(x)\n  n = length(x)\n  n < 2 && @error(\"length of x must be >= 2\")\n  return sum((x[i] + x[i+1])^2 for i=1:n-1)\nend \nstart_example(n :: Int) = ones(n)\nexample_model(n :: Int) = ADNLPModel(example, start_example(n), name=\"Example \" * string(n) * \" variables\")\n\nn = 4 # size of the problem\nmodel = example_model(n)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"and call PSNLPModel<:AbstractPartiallySeparableNLPModel to define a partitioned NLPModel:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"pqn_adnlp = PSNLPModel(model)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Then, you can apply the usual methods obj and grad, hprod from NLPModels.jl:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using NLPModels\nx = ones(n)\nfx = NLPModels.obj(pqn_adnlp, x) # compute the obective function","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"gx = NLPModels.grad(pqn_adnlp, x) # compute the gradient","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"gx == NLPModels.grad(model, x)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"v = ones(n)\nhv = NLPModels.hprod(model, x, v)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"fx, gx and hv accumulate respectively the element functions f_i, the element gradients nabla f_i, respectively and element Hessian-vector nabla^2 f_i(U_i x) U_i v contributions. In addition, a PSNLPModel stores the value of each element gradient and element Hessian-vector product.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The same procedure can be applied to MathOptNLPModels:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using JuMP, MathOptInterface, NLPModelsJuMP\n\nfunction jump_example(n::Int)\n  m = Model()\n  @variable(m, x[1:n])\n  @NLobjective(m, Min, sum((x[i] + x[i+1])^2 for i = 1:n-1))\n  evaluator = JuMP.NLPEvaluator(m)\n  MathOptInterface.initialize(evaluator, [:ExprGraph])\n  variables = JuMP.all_variables(m)\n  x0 = ones(n)\n  JuMP.set_start_value.(variables, x0)\n  nlp = MathOptNLPModel(m)\n  return nlp\nend\n\njumpnlp_example = jump_example(n)\npqn_jumpnlp = PSNLPModel(jumpnlp_example)\n\nfx = NLPModels.obj(pqn_jumpnlp, x) # compute the obective function\ngx = NLPModels.grad(pqn_jumpnlp, x) # compute the gradient","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"In version v0.2.0, ManualNLPModels will be supported.","category":"page"},{"location":"tutorial/#Partitioned-quasi-Newton-NLPModels","page":"Tutorial","title":"Partitioned quasi-Newton NLPModels","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"A model deriving from AbstractPQNNLPModel<:AbstractPartiallySeparableNLPModel allocates storage required for partitioned quasi-Newton updates, which are implemented in PartitionedStructures.jl (see the PartitionedStructures.jl tutorial for more details). There are several variants:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"'PBFGSNLPModel': every element-Hessian approximation is updated with BFGS;\n'PSR1NLPModel': every element-Hessian approximation is updated with SR1;\n'PSENLPModel': every element-Hessian approximation is updated with BFGS if the curvature condition holds, or withSR1 otherwise;\n'PCSNLPModel': each element-Hessian approximation with BFGS if it is classified as convex, or with SR1 otherwise;\n'PLBFGSNLP': every element-Hessian approximations is a LBFGS operator;\n'PLSR1NLPModel': every element-Hessian approximations is a LSR1 operator;\n'PLSENLPModel': by default, every element-Hessian approximations is a LBFGS operator as long as the curvature condition holds, otherwise it becomes a LSR1 operator.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"pbfgsnlp = PBFGSNLPModel(jumpnlp_example)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The Hessian approximation of each element function f_i (y) = (y_1 + y_2)^2 is initially set to an identity matrix.  The contribution of every element Hessian approximation is accumulated as","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"left \nbeginarrayccc\n  left ( beginarraycc\n    1  \n     1  \n  endarray right )   \n   0  \n    0 \nendarray\nright  \n+ \nleft \nbeginarrayccc\n  0   \n   left ( beginarraycc\n    1  \n     1  \n  endarray right )  \n    0 \nendarray\nright \n+ \nleft \nbeginarrayccc\n  0   \n   0  \n    left ( beginarraycc\n    1  \n     1  \n  endarray right )\nendarray\nright ","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The accumulated matrix can be visualized with:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Matrix(hess_approx(pbfgsnlp))","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Then, you can update the partitioned quasi-Newton approximation with the pair x,s:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"s = rand(n)\nupdate_nlp(pbfgsnlp, x, s)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"and you can perform a partitioned-matrix-vector product with:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"v = ones(n)\nBv = hprod(pbfgsnlp, x, v)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Moreover, there is an interface to LinearOperator (see LinearOperators) from any AbstractPQNNLPModel:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using LinearOperators\nB = LinearOperator(pbfgsnlp)\nB*v","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"which can be paired with iterative solvers (see Krylov.jl).","category":"page"}]
}
