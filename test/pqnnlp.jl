@testset "NLPModels.methods" begin
  n = 15
  adnlp = ADNLPProblems.arwhead(; n)
  psnlp = PSNLPModel(adnlp)
  pbfgsnlp = PBFGSNLPModel(adnlp)

  @test NLPModels.obj(adnlp, adnlp.meta.x0) == NLPModels.obj(psnlp, psnlp.meta.x0)
  @test NLPModels.obj(adnlp, adnlp.meta.x0) == NLPModels.obj(pbfgsnlp, pbfgsnlp.meta.x0)

  g = NLPModels.grad(psnlp, psnlp.meta.x0)
  @test Vector(NLPModels.grad(psnlp, psnlp.meta.x0)) == NLPModels.grad(adnlp, adnlp.meta.x0)

  pv = similar(psnlp.meta.x0)
  pv .= 1
  Hv = similar(psnlp.meta.x0, simulate_vector = false)
  v = similar(adnlp.meta.x0)
  v .= 1
  hv = similar(adnlp.meta.x0)
  NLPModels.hprod!(psnlp, psnlp.meta.x0, pv, Hv)
  NLPModels.hprod!(adnlp, adnlp.meta.x0, v, hv)

  @test Vector(Hv) == hv
  @test Vector(NLPModels.hprod(psnlp, psnlp.meta.x0, pv)) ==
        NLPModels.hprod(adnlp, adnlp.meta.x0, v)

  #PQN NLPModels
  psenlp = PSENLPModel(adnlp)

  NLPModels.hprod!(psenlp, psenlp.meta.x0, pv, Hv)
  hv = Matrix(psenlp.op) * v
  Vector(Hv) == hv

  Vector(NLPModels.hprod(psenlp, psenlp.meta.x0, pv)) == hv

  x0 = psenlp.meta.x0
  s = similar(x0)
  s .= 1
  g = similar(x0; simulate_vector = false)
  g1 = similar(x0; simulate_vector = false)
  y = similar(x0; simulate_vector = false)

  NLPModels.grad!(psenlp, x0, g)
  NLPModels.grad!(psenlp, x0 + s, g1)

  y .= g1 .- g
  push!(psenlp, s, y)

  pB = psenlp.op
  res = Matrix(pB) * Vector(s) - Vector(y)
  @test norm(res) == 0
end

@testset "trunk" begin
  n = 15
  adnlp = ADNLPProblems.arwhead(; n)
  pbfgsnlp = PBFGSNLPModel(adnlp)
  pcsnlp = PCSNLPModel(adnlp)
  plbfgsnlp = PLBFGSNLPModel(adnlp)
  plsr1nlp = PLSR1NLPModel(adnlp)
  plsenlp = PLSENLPModel(adnlp)
  psr1nlp = PSR1NLPModel(adnlp)
  psenlp = PSENLPModel(adnlp)
  psnlp = PSNLPModel(adnlp)

  ges_pbfgsnlp = trunk(pbfgsnlp)
  ges_pcsnlp = trunk(pcsnlp)
  ges_plbfgsnlp = trunk(plbfgsnlp)
  ges_plsr1nlp = trunk(plsr1nlp)
  ges_plsenlp = trunk(plsenlp)
  ges_psr1nlp = trunk(psr1nlp)
  ges_psenlp = trunk(psenlp)
  ges_psnlp = trunk(psnlp)

  @test ges_pbfgsnlp.status == :first_order
  @test ges_pcsnlp.status == :first_order
  @test ges_plbfgsnlp.status == :first_order
  @test ges_plsr1nlp.status == :first_order
  @test ges_plsenlp.status == :first_order
  @test ges_psr1nlp.status == :first_order
  @test ges_psenlp.status == :first_order
  @test ges_psnlp.status == :first_order
end


@testset "Merge, from a limit function" begin
  function limit(x; n=length(x))
    sum(sum( sum(x[j] for j in 1:n)^2 * x[i] * x[z] for i in 1:n) for z in 1:n)
  end
  start_limit(n :: Int) = ones(n)
  
  n = 10
  adnlp = ADNLPModel(limit, start_limit(n))

  pbfgsnlp = PBFGSNLPModel(adnlp)
  pcsnlp = PCSNLPModel(adnlp)
  plbfgsnlp = PLBFGSNLPModel(adnlp)
  plsr1nlp = PLSR1NLPModel(adnlp)
  plsenlp = PLSENLPModel(adnlp)
  psr1nlp = PSR1NLPModel(adnlp)
  psenlp = PSENLPModel(adnlp)
  psnlp = PSNLPModel(adnlp)
end