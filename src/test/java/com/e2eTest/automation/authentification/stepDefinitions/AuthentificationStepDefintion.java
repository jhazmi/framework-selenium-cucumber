package com.e2eTest.automation.authentification.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTest.automation.authentification.pageObjects.AuthentificationPage;
import com.e2eTest.automation.util.CommonMethods;
import com.e2eTest.automation.util.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDefintion extends CommonMethods {

	public WebDriver driver;
	private AuthentificationPage authentificationPage = new AuthentificationPage(driver);
	private CommonMethods commonMethods = new CommonMethods();

	public AuthentificationStepDefintion() {
		driver = Setup.driver;
	}

	@Given("^J ouvre l application OrangeHRM$")
	public void jOuvreLApplicationOrangeHRM() throws Throwable {
		commonMethods.readFromConfigFle();
		logger.info("J ouvre l application OrangeHRM");
		// driver.get("https://opensource-demo.orangehrmlive.com/");
	}

	@When("^Je saisie userName$")
	public void jeSaisieUserName() throws Throwable {
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationPage.sendUserName();
		logger.info("Je saisie userName");
	}

	@When("^Je saisie mot de passe$")
	public void jeSaisieMotDePasse() throws Throwable {
		authentificationPage.sendUserPassword();
		logger.info("Je saisie mot de passe");
	}

	@When("^Je clique sur le bouton login$")
	public void jeCliqueSurLeBoutonLogin() throws Throwable {
		authentificationPage.clicLoginButton();
		logger.info("Je clique sur le bouton login");
	}

	@Then("^Redirection vers la page Home$")
	public void redirectionVersLaPageHome() throws Throwable {
		String welcome = AuthentificationPage.welcome.getText();
		Assert.assertTrue(welcome.contains("Welcome"));
		logger.info("Redirection vers la page Home");
	}

}
